import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichePage } from './fiche.page';

const routes: Routes = [
  {
    path: '',
    component: FichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichePageRoutingModule {}
