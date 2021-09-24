import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavParams, ModalController, PopoverController, Platform } from "@ionic/angular";

import { DataService } from "../../services/data.service";
import { TelephoneModalPage } from "../telephone-modal/telephone-modal.page";
@Component({
  selector: "app-recettes-details",
  templateUrl: "./recettes-details.page.html",
  styleUrls: ["./recettes-details.page.scss"]
})
export class RecettesDetailsPage implements OnInit {
  item: any = {};
  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private dataService: DataService,
    private popoverController: PopoverController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this._init(this.navParams.get("recettes")).then((item) => {
      this.item = item;
    });
  }

  _init(item) {
    return new Promise((resolve, reject) => {
      if (item.cons && typeof item.cons === "string") {
        let cons = item.cons.split(",");
        this.dataService
          .find("nantes/AdvicesDatas.js", (adv) => {
            return cons.indexOf(adv.code) > -1;
          })
          .then((advices) => {
            item.cons = advices;
            resolve(item);
          })
          .catch(reject);
      } else {
        resolve(item);
      }
    });
  }

  openUrl(url) {
    // var url = "http://lagalerieduzerodechet.fr/?wpbdp_listing=" + nom.replace(/ /g, "-");
    window.open(url, "_system");
  }

  async openTel(tel) {
    const popover = await this.popoverController.create({
      component: TelephoneModalPage,
      componentProps: {
        phones: tel.split(";"),
      },
      translucent: true,
    });
    return await popover.present();
  }

  close() {
    this.modalController.dismiss();
  }
}
