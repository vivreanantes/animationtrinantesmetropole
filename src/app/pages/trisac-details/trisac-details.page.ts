import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavParams, ModalController, Platform } from "@ionic/angular";

import { DataService } from "../../services/data.service";
@Component({
  selector: "app-trisac-details",
  templateUrl: "./trisac-details.page.html",
  styleUrls: ["./trisac-details.page.scss"]
})
export class TrisacDetailsPage implements OnInit {
  item: any = {};
  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this._init(this.navParams.get("trisac")).then((item) => {
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

  openMap(latitude, longitude) {
    var geoString = "";
    if (this.platform.is("ios")) {
      geoString = "maps://?q=" + latitude + "," + longitude + "";
    } else if (this.platform.is("android")) {
      geoString = "geo://?q=" + latitude + "," + longitude + "";
    } else {
      geoString =
        "http://maps.google.fr/maps?f=q&hl=fr&q=" +
        latitude +
        "," +
        longitude +
        "";
    }
    window.open(geoString, "_system");
  }

  close() {
    this.modalController.dismiss();
  }
}
