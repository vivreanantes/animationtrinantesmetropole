import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  NavParams,
  ModalController,
  Platform,
  PopoverController,
} from "@ionic/angular";
import { NguCarouselConfig } from "@ngu/carousel";
import { TelephoneModalPage } from "../telephone-modal/telephone-modal.page";

import { DataService } from "../../services/data.service";

@Component({
  selector: "app-structure",
  templateUrl: "./structure.page.html",
  styleUrls: ["./structure.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class StructurePage implements OnInit {
  item: any = {};
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true,
    },
    load: 2,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
  };

  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this._init({ ...this.navParams.get("fiche") }).then((item: any) => {
      let images = [];
      Object.keys(item).map((key, index) => {
        if (key.indexOf("image") > -1) {
          images.push(item[key]);
        }
        if (index === Object.keys(item).length - 1) {
          item.images = images;
          this.item = item;
        }
      });
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
