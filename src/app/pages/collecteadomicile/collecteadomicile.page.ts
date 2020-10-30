import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NguCarouselConfig } from "@ngu/carousel";

import { DataService } from "../../services/data.service";

import { JourDeCollecteModalPage } from "../jourdecollecte-modal/jourdecollecte-modal.page";

@Component({
  selector: "app-collecteadomicile",
  templateUrl: "./collecteadomicile.page.html",
  styleUrls: ["./collecteadomicile.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CollecteADomicilePage implements OnInit {
  input: string = null;
  categories: any = {};
  categoriesRaw: any = {};
  filtres: any = {};
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 6, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: false,
      hideOnSingleSlide: false,
    },
    load: 2,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
  };

  constructor(
    public modalController: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.init();
  }

  /**
   * Initialise les propositions
   */
  init() {
    const villesJoursDeCollectePromise = new Promise((resolve, reject) => {
      this.dataService
        .get("nantes/VillesJoursDeCollecteDatas.js")
        .then((data) => {
          resolve({
            type: "cat",
            datas: data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
     const itemsPromise = new Promise((resolve, reject) => {
      this.dataService
        .get("nantes/HomeCollectModsDatas.js")
        .then((data) => {
          resolve({
            type: "items",
            datas: data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
    return new Promise((resolve, reject) => {
      Promise.all([villesJoursDeCollectePromise, itemsPromise])
        .then((datas) => {
          let results: any = {};
          let categories: Array<any>;
          let items: Array<any>;
          datas.map((item: any) => {
            if (item.type === "cat") {
              categories = item.datas;
            } else {
              items = item.datas._homeCollectModsDatas;
            }
          });
          categories.map((categorie, index) => {
            categorie.items = [];
            categorie.itemShow = 0;
            results[categorie.code] = categorie;
            if (index === categories.length - 1) {
              // items: Array(173)
              
              items.map((item, itemIndex) => {
                if (item.zone && results[item.zone]) {
                  results[item.zone].itemShow++;
                  results[item.zone].items.push(item);
                }
                if (itemIndex === items.length - 1) {
                  this.categoriesRaw = results;
                  this.categories = results;
                  resolve();
                }
              });
            }
          });
        })
        .catch(reject);
    });
  }

  /**
   * Changement du filtre
   */
  onChangeFiltre(data) {
    this.filtre(data);
  }

  /**
   * Remet à zéro le filtre
   */
  cleanFiltre() {
    this.input = null;
    this.filtre();
  }

  /**
   * Filtre les propositions
   */
  filtre(value?: any) {
    let categories: any = {};
    value = value.toLowerCase();
    Object.keys(this.categoriesRaw).map((key, index) => {
      if (
        this.categoriesRaw[key].items &&
        this.categoriesRaw[key].items.length > 0
      ) {
        this.categoriesRaw[key].items.map((item, jndex) => {
          // || item.mots_cles_en.toLowerCase().indexOf(value) > -1
          if (
            !value ||
            value === "" ||
            item.mots_cles.toLowerCase().indexOf(value) > -1 
          ) {
            if (!categories[key])
              categories[key] = this.copyCategorie(this.categoriesRaw[key]);
            categories[key].items.push(item);
          }
          if (
            jndex === this.categoriesRaw[key].items.length - 1 &&
            index === Object.keys(this.categoriesRaw).length - 1
          ) {
            this.categories = categories;
          }
        });
      } else if (index === Object.keys(this.categoriesRaw).length - 1) {
        this.categories = categories;
      }
    });
  }

  /**
   * Affiche la fiche du dechet
   */
  async voirJourDeCollecte(item: any) {
    const modal = await this.modalController.create({
      component: JourDeCollecteModalPage,
      componentProps: {
        dechet: item,
      },
    });
    return await modal.present();
  }

  private copyCategorie(source: any) {
    let categorie: any = {};
    Object.keys(source).map((key) => {
      if (key !== "items") {
        categorie[key] = source[key];
      }
    });
    categorie.items = [];
    return categorie;
  }
}
