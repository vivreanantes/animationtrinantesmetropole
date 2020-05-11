import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

import { DataService } from "../../services/data.service";

@Component({
  selector: "app-collecte",
  templateUrl: "./collecte.page.html",
  styleUrls: ["./collecte.page.scss"],
})
export class CollectePage implements OnInit {
  item: any = {};
  constructor(
    public navParams: NavParams,
    private dataService: DataService,
    public modalController: ModalController
  ) {}
  ngOnInit() {
    this._init(this.navParams.get("collect")).then((item) => {
      this.item = item;
    });
  }

  _init(item) {
    return new Promise((resolve, reject) => {
      if (typeof item.colFiches === "string") {
        this.dataService
          .find("nantes/InfosDatas.js", (fiche) => {
            return fiche.code === item.colFiches;
          })
          .then((fiche) => {
            item.colFiches = fiche;
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
