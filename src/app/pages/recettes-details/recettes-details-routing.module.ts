import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesDetailsPage } from './recettes-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesDetailsPageRoutingModule {}
