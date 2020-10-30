import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DataService } from "../../services/data.service";
import { RecettesPage } from './recettes.page';

@Injectable({ providedIn: 'root' })
export class RecettesResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataService.get("nantes/RecettesData.js").then((annuaire) => {
        let recettesFiltrer = [];
        annuaire._recettesData.map((recettes, index) => {
          if (recettes.categorie_principale) {
            if (!recettesFiltrer[recettes.categorie_principale]) recettesFiltrer[recettes.categorie_principale] = [];

            if (!recettesFiltrer[recettes.categorie_principale][recettes.categorie_principale_detail])
              recettesFiltrer[recettes.categorie_principale][recettes.categorie_principale_detail] = [];

            recettesFiltrer[recettes.categorie_principale][recettes.categorie_principale_detail].push(
              this._formatRecettes(recettes)
            );
          }
          if (index === annuaire._recettesData.length - 1) {
            let newRecettesFiltrer = [];
            let recettesFiltrerLabel = Object.keys(recettesFiltrer);
            recettesFiltrerLabel.sort();
            recettesFiltrerLabel.map((categorie_principale, jindex) => {
              newRecettesFiltrer[categorie_principale] = recettesFiltrer[categorie_principale];
              if (jindex === recettesFiltrerLabel.length - 1) {
                resolve(newRecettesFiltrer);
              }
            });
          }
        });
      }).catch(reject);
    });
  }

  private _formatRecettes(recettes) {
    recettes.adresse = "";
    recettes.adresse += recettes.housenumber ? `${recettes.housenumber} ` : "";
    recettes.adresse += recettes.street ? `${recettes.street} ` : "";
    recettes.adresse += recettes.city ? `, ${recettes.city} ` : "";
    recettes.adresse += recettes.postcode ? `(${recettes.postcode}).` : "";

    if (recettes.heure_debut_1) {
      recettes.horaires = [];
      Object.keys(recettes).map((item) => {
        if (item.indexOf("heure_debut_") > -1) {
          let index = item.match(/\d/g).join("");
          recettes.horaires[index] = {
            heure:
              recettes[`heure_debut_${index}`] +
              " - " +
              recettes[`heure_fin_${index}`],
            jour: recettes[`jour_${index}`],
          };
        }
      });
    }
    return recettes;
  }
}

const routes: Routes = [
  {
    path: '',
    component: RecettesPage,
    resolve: {
      recettes: RecettesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPageRoutingModule { }
