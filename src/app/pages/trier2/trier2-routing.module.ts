import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Trier2Page } from './trier2.page';

const routes: Routes = [
  {
    path: '',
    component: Trier2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Trier2PageRoutingModule {}
