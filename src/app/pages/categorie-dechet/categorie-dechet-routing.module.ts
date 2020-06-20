import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from "../../services/data.service";
import { CategorieDechetPage } from './categorie-dechet.page';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategorieResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this.dataService
        .find("nantes/UsualCategoriesDatas.js", (categorie) => {
          return categorie.code === route.paramMap.get('categorie');
        })
        .then((categorie) => {
          this.dataService
            .find("nantes/GarbagesDatas.js", undefined, (garbage) => {
              return garbage.cat_usuel === route.paramMap.get('categorie');
            })
            .then((datas) => {
              categorie.items = datas;
              resolve(categorie);
            })

        });
    });
  }
}

const routes: Routes = [
  {
    path: '',
    component: CategorieDechetPage,
    resolve: {
      categorie: CategorieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieDechetPageRoutingModule { }
