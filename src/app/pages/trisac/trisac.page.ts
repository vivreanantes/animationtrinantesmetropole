import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { DataService } from "../../services/data.service";

import { TrisacDetailsPage } from "../trisac-details/trisac-details.page";

@Component({
  selector: "app-trisac",
  templateUrl: "./trisac.page.html",
  styleUrls: ["./trisac.page.scss"],
})
export class TrisacPage implements OnInit {
  trisacsRaw: Array<any> = [];
  trisacs: Array<any> = [];
  input: string = null;

  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.get("nantes/TrisacsData.js").then((trisacs) => {
      let trisacFiltrer = [];
      trisacs._structuresDatas.map((trisac, index) => {
        if (!trisacFiltrer[trisac.zone]) trisacFiltrer[trisac.zone] = [];

        if (!trisacFiltrer[trisac.zone][trisac.type_lieu])
          trisacFiltrer[trisac.zone][trisac.type_lieu] = [];

        trisacFiltrer[trisac.zone][trisac.type_lieu].push(
          this._formatTrisac(trisac)
        );
        if (index === trisacs._structuresDatas.length - 1) {
          let newTrisacFiltrer = [];
          let trisacFiltrerLabel = Object.keys(trisacFiltrer);
          trisacFiltrerLabel.sort();
          trisacFiltrerLabel.map((zone, jindex) => {
            newTrisacFiltrer[zone] = trisacFiltrer[zone];
            if (jindex === trisacFiltrerLabel.length - 1) {
              this.trisacsRaw = newTrisacFiltrer;
              this.filtre();
            }
          });
        }
      });
    });
  }

  private _formatTrisac(trisac) {
    trisac.adresse = "";
    trisac.adresse += trisac.housenumber ? `${trisac.housenumber} ` : "";
    trisac.adresse += trisac.street ? `${trisac.street} ` : "";
    trisac.adresse += trisac.city ? `, ${trisac.city} ` : "";
    trisac.adresse += trisac.postcode ? `(${trisac.postcode}).` : "";

    if (trisac.heure_debut_1) {
      trisac.horaires = [];
      Object.keys(trisac).map((item) => {
        if (item.indexOf("heure_debut_") > -1) {
          let index = item.match(/\d/g).join("");
          trisac.horaires[index] = {
            heure:
              trisac[`heure_debut_${index}`] +
              " - " +
              trisac[`heure_fin_${index}`],
            jour: trisac[`jour_${index}`],
          };
        }
      });
    }
    return trisac;
  }

  async details(item) {
    const modal = await this.modalController.create({
      component: TrisacDetailsPage,
      componentProps: {
        trisac: item,
      },
    });
    return await modal.present();
  }

  getFirstItem(item) {
    let keys = Object.keys(item);
    return item[keys[0]][0];
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
    if (value) {
      let trisacs = [];
      Object.keys(this.trisacsRaw).map((zone, index) => {
        if (zone.toLowerCase().indexOf(value) > -1) {
          trisacs[zone] = this.trisacsRaw[zone];
        }
        if (index === Object.keys(this.trisacsRaw).length - 1) {
          this.trisacs = trisacs;
        }
      });
    } else {
      this.trisacs = this.trisacsRaw;
    }
  }
}
