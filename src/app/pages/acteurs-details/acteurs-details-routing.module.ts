import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActeursDetailsPage } from './acteurs-details.page';

const routes: Routes = [
  {
    path: '',
    component: ActeursDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActeursDetailsPageRoutingModule {}
