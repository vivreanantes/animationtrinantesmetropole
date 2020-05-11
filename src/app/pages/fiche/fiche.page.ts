import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

import { DataService } from "../../services/data.service";

@Component({
  selector: "app-fiche",
  templateUrl: "./fiche.page.html",
  styleUrls: ["./fiche.page.scss"],
})
export class FichePage implements OnInit {
  item: any = {};
  constructor(
    public navParams: NavParams,
    private dataService: DataService,
    public modalController: ModalController
  ) {}
  ngOnInit() {
    this._init(this.navParams.get("fiche")).then((item) => {
      this.item = item;
    });
  }

  _init(item) {
    return new Promise((resolve, reject) => {
      if (typeof item.fiche === "string") {
        this.dataService
          .find("nantes/InfosDatas.js", (fiche) => {
            return fiche.code === item.fiche;
          })
          .then((fiche) => {
            item.fiche = fiche;
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
