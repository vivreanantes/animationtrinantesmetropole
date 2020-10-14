import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DataService } from "../../services/data.service";
import { ActeursPage } from './acteurs.page';

@Injectable({ providedIn: 'root' })
export class ActeursResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataService.get("nantes/ActeursData.js").then((annuaire) => {
        let acteursFiltrer = [];
        annuaire._acteursData.map((acteurs, index) => {
          if (acteurs.categorie_principale) {
            if (!acteursFiltrer[acteurs.categorie_principale]) acteursFiltrer[acteurs.categorie_principale] = [];

            if (!acteursFiltrer[acteurs.categorie_principale][acteurs.categorie_principale_detail])
              acteursFiltrer[acteurs.categorie_principale][acteurs.categorie_principale_detail] = [];

            acteursFiltrer[acteurs.categorie_principale][acteurs.categorie_principale_detail].push(
              this._formatActeurs(acteurs)
            );
          }
          if (index === annuaire._acteursData.length - 1) {
            let newActeursFiltrer = [];
            let acteursFiltrerLabel = Object.keys(acteursFiltrer);
            acteursFiltrerLabel.sort();
            acteursFiltrerLabel.map((categorie_principale, jindex) => {
              newActeursFiltrer[categorie_principale] = acteursFiltrer[categorie_principale];
              if (jindex === acteursFiltrerLabel.length - 1) {
                resolve(newActeursFiltrer);
              }
            });
          }
        });
      }).catch(reject);
    });
  }

  private _formatActeurs(acteurs) {
    acteurs.adresse = "";
    acteurs.adresse += acteurs.housenumber ? `${acteurs.housenumber} ` : "";
    acteurs.adresse += acteurs.street ? `${acteurs.street} ` : "";
    acteurs.adresse += acteurs.city ? `, ${acteurs.city} ` : "";
    acteurs.adresse += acteurs.postcode ? `(${acteurs.postcode}).` : "";

    if (acteurs.heure_debut_1) {
      acteurs.horaires = [];
      Object.keys(acteurs).map((item) => {
        if (item.indexOf("heure_debut_") > -1) {
          let index = item.match(/\d/g).join("");
          acteurs.horaires[index] = {
            heure:
              acteurs[`heure_debut_${index}`] +
              " - " +
              acteurs[`heure_fin_${index}`],
            jour: acteurs[`jour_${index}`],
          };
        }
      });
    }
    return acteurs;
  }
}

const routes: Routes = [
  {
    path: '',
    component: ActeursPage,
    resolve: {
      acteurs: ActeursResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActeursPageRoutingModule { }
