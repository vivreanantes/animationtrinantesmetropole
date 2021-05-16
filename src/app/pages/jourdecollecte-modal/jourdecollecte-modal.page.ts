import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from "@ionic/angular";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-jourdecollecte-modal',
  templateUrl: './jourdecollecte-modal.page.html',
  styleUrls: ['./jourdecollecte-modal.page.scss'],
})
export class JourDeCollecteModalPage implements OnInit {
  item: any = {};
  constructor(
    private navParams: NavParams,
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this._init(this.navParams.get("dechet")).then((item) => {
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

  close() {
    this.modalController.dismiss();
  }

}
