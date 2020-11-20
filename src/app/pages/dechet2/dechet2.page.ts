import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { NguCarouselConfig } from "@ngu/carousel";

import { DataService } from "../../services/data.service";
import { CollectePage } from "../collecte/collecte.page";
import { FichePage } from "../fiche/fiche.page";

import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";

@Component({
  selector: "app-dechet2",
  templateUrl: "./dechet2.page.html",
  styleUrls: ["./dechet2.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Dechet2Page implements OnInit {
  item: any = {};
  currentHomeCollectModsMco: string = null;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 6, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: false,
      hideOnSingleSlide: true,
    },
    load: 3,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
  };
  constructor(
    public navParams: NavParams,
    private dataService: DataService,
    public modalController: ModalController,
    public homeCollectModsHandler: HomeCollectModsHandler
  ) {}

  ngOnInit() {
    this._init(this.navParams.get("dechet")).then((item: any) => {
    //  item.recyc = `recyclable_${item.recyc.toLowerCase()}`;
      this.item = item;
    });
  }

  private _init(item) {
    this.currentHomeCollectModsMco = this.homeCollectModsHandler.get().mco;


    let Promises: Array<any> = [];
    let getCatUsuel = new Promise((resolve, reject) => {
      if (typeof item.cat_usuel !== "object") {
        this.dataService
          .find("nantes/UsualCategoriesDatas.js", (categorie) => {
            return categorie.code === item.cat_usuel;
          })
          .then((categorie) => {
            item.cat_usuel = categorie;
            resolve();
          })
          .catch(reject);
      } else {
        resolve();
      }
    });
    Promises.push(getCatUsuel);
    if (typeof item.modco === "string") {
      let homeCollectMods = this.homeCollectModsHandler.get();
      homeCollectMods = homeCollectMods ? homeCollectMods.mco.split(",") : [];
      let modco = item.modco.split(",");
      let getModCo = new Promise((resolve, reject) => {
        this.dataService
          .find("nantes/CollectModsDatas.js", undefined, (mod) => {
            if (mod.pour_tous==="oui") {
              // un mode de collecte qui ne dépend pas de la configuration
              return (modco.indexOf(mod.code) > -1);
            }
            else {
              // un mode de collecte qui dépend de la configuration
            return (
              (modco.indexOf(mod.code) > -1 &&
              homeCollectMods.indexOf(mod.code) > -1
              ) 
            );
          }
          })
          .then((mods) => {
            item.modco_filtered = mods;
            resolve();
          })
          .catch(reject);
      });

      Promises.push(getModCo);
    }

    if (typeof item.cons === "string") {
      let cons = item.cons.split(",");
      let getCons = new Promise((resolve, reject) => {
        this.dataService
          .find("nantes/AdvicesDatas.js", undefined, (adv) => {
            return cons.indexOf(adv.code) > -1;
          })
          .then((advices) => {
            item.cons = advices;
            resolve();
          })
          .catch(reject);
      });

      Promises.push(getCons);
    }

    return new Promise((resolve) => {
      Promise.all(Promises).then(() => {
        resolve(item);
      });
    });
  }
  /**
   * Affiche la fiche du la collecte
   */
  async voirCollec(item: any) {
    const modal = await this.modalController.create({
      component: CollectePage,
      componentProps: {
        collect: item,
      },
    });
    return await modal.present();
  }

  /**
   * Affiche la fiche information
   */
  async voirAdvice(item: any) {
    if (item.fiche) {
      const modal = await this.modalController.create({
        component: FichePage,
        componentProps: {
          fiche: item,
        },
      });
      return await modal.present();
    }
    return false;
  }

  close() {
    this.modalController.dismiss();
  }
}
