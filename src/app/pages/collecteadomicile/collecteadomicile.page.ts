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
  input_zone: string = null;
  categories: any = {};
  categoriesRaw: any = {};
  filtres: Array<any> = [];
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
    // private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.init();
    this.filtres[0]="Bellevue - Chantenay - Sainte Anne";
    this.filtres[1]="Breil - Barberie";
    this.filtres[2]="Centre Ville";
    this.filtres[3]="Dervallières - Zola";
    this.filtres[4]="Doulon - Bottière";
    this.filtres[5]="Hauts Pavés - Saint Félix";
    this.filtres[6]="Ile de Nantes";
    this.filtres[7]="Malakoff - Saint-Donatien";
    this.filtres[8]="Nantes Erdre";
    this.filtres[9]="Nantes Nord";
    this.filtres[10]="Nantes Sud";
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
      // La Promesse qui est lancée sur le chargement des villesJoursDeCollecte, et des JoursDeCollecte
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
                  // this.categories = results;
                 //  resolve();
                }
              });
            }
          });
          // this.filtre();
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
    this.filtre(this.input);
  }

  /**
   * Remet à zéro le filtre
   */
   onChangeFiltreZone() {
    this.filtre(this.input);
  }
  /**
   * Retire les accents
   */
  normalizeString (string: any) {
    return string.split('').map(function (letter) {
        let i = this.accents.indexOf(letter)
        return (i !== -1) ? this.out[i] : letter
      }.bind({
        accents: 'ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź',
        out: 'AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz'
      })
    ).join('')
  }

  /**
   * Filtre les propositions
   */
  filtre(value?: any) {
    if (value == null) {
      value = "";
    }
    let categories: any = {};
    value = value.toLowerCase();
    // value = this.normalizeString(value);
    Object.keys(this.categoriesRaw).map((key, index) => {
      
      // 1. S'il y a des élements dans cette catégorie
      if (
        this.categoriesRaw[key].items &&
        this.categoriesRaw[key].items.length > 0
      ) {
        // 1.1. Si c'est la bonne catégorie
        if (this.categoriesRaw[key].code == this.input_zone) {
          
          // Je parcours tous ces élements
          this.categoriesRaw[key].items.map((item, jndex) => {
              // console.log("abc");
              if (
                !value ||
                value === "" ||
                item.mots_cles.toLowerCase().indexOf(value) > -1 
              ) {
                if (!categories[key]) {
                  categories[key] = this.copyCategorie(this.categoriesRaw[key]);
                }
                categories[key].items.push(item);
              }
          });
        }
        // 1.2. Ce n'est pas la bonne catégorie
        else {
          // Rien à faire
          // categories[key].items = new Array();
        }

        
        // 1.3 Le dernier : on modifie l'objet this.categories
        if (
          index === this.categoriesRaw[key].items.length - 1 &&
          index === Object.keys(this.categoriesRaw).length - 1
        ) {
          this.categories = categories;
        }
      }
      
      
    });

    this.categories = categories;

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
