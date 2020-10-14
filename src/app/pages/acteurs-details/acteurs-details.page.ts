import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavParams, ModalController, Platform } from "@ionic/angular";

import { DataService } from "../../services/data.service";
@Component({
  selector: "app-acteurs-details",
  templateUrl: "./acteurs-details.page.html",
  styleUrls: ["./acteurs-details.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ActeursDetailsPage implements OnInit {
  item: any = {};
  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this._init(this.navParams.get("acteurs")).then((item) => {
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
    // var url = "http://lagalerieduzerodechet.fr/?wpbdp_listing=" + nom_.replace(/ /g, "-");
    window.open(url, "_system");
  }

  close() {
    this.modalController.dismiss();
  }
}
