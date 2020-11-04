import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichesPage } from './fiches.page';

const routes: Routes = [
  {
    path: '',
    component: FichesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichesPageRoutingModule {}
