import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DechetPage } from './dechet.page';
import { Observable } from 'rxjs';
import { DataService } from "../../services/data.service";
import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";

@Injectable({ providedIn: 'root' })
export class DechetResolver implements Resolve<any> {
  constructor(private dataService: DataService, private homeCollectModsHandler: HomeCollectModsHandler) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    var item: any = {};
    return new Promise((resolve, reject) => {
      this.dataService
        .find("nantes/GarbagesDatas.js", (garbage) => {
          return garbage.code === route.paramMap.get('dechet')
        })
        .then((garbage) => {
          item = { ...garbage };
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

          let getModCo = new Promise((resolve, reject) => {
            if (typeof item.modco === "string") {
              let homeCollectMods = this.homeCollectModsHandler.get();
              homeCollectMods = homeCollectMods ? homeCollectMods.mco.split(",") : [];
              let modco = item.modco.split(",");
              this.dataService
                .find("nantes/CollectModsDatas.js", undefined, (mod) => {
                  return (
                    modco.indexOf(mod.code) > -1 &&
                    homeCollectMods.indexOf(mod.code) === -1
                  );
                })
                .then((mods) => {
                  item.modco = mods;
                  resolve();
                })
                .catch(reject);
            } else {
              resolve();
            }
          });
          Promises.push(getModCo);

          let getCons = new Promise((resolve, reject) => {
            if (typeof item.cons === "string") {
              let cons = item.cons.split(",");
              this.dataService
                .find("nantes/AdvicesDatas.js", undefined, (adv) => {
                  return cons.indexOf(adv.code) > -1;
                })
                .then((advices) => {
                  item.cons = advices;
                  resolve();
                })
                .catch(reject);
            } else {
              resolve();
            }
          });
          Promises.push(getCons);
          Promise.all(Promises).then(response => {
            resolve(item);
          }).catch(reject);
        })
        .catch(reject);
    });
  }
}

const routes: Routes = [
  {
    path: '',
    component: DechetPage,
    resolve: {
      dechet: DechetResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DechetPageRoutingModule { }
