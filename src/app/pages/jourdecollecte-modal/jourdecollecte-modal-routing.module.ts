import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourDeCollecteModalPage } from './jourdecollecte-modal.page';

const routes: Routes = [
  {
    path: '',
    component: JourDeCollecteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourDeCollecteModalPageRoutingModule {}
