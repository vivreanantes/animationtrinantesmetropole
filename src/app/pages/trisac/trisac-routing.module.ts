import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DataService } from "../../services/data.service";
import { TrisacPage } from './trisac.page';

@Injectable({ providedIn: 'root' })
export class TrisacsResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
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
                resolve(newTrisacFiltrer);
              }
            });
          }
        });
      }).catch(reject);
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
}

const routes: Routes = [
  {
    path: '',
    component: TrisacPage,
    resolve: {
      trisacs: TrisacsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrisacPageRoutingModule { }
