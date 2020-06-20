import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DataService } from "../../services/data.service";
import { TrierPage } from './trier.page';

@Injectable({ providedIn: 'root' })
export class DechetsResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(): Promise<any> {
    return this.dataService.find("nantes/GarbagesDatas.js", undefined, dechet => {
      return dechet.code;
    })
  }
}

@Injectable({ providedIn: 'root' })
export class CategoriesResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(): Promise<any> {
    return this.dataService
      .find("nantes/UsualCategoriesDatas.js", undefined, categorie => {
        return categorie.code;
      })
  }
}

const routes: Routes = [
  {
    path: '',
    component: TrierPage,
    resolve: {
      dechets: DechetsResolver,
      categories: CategoriesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrierPageRoutingModule { }
