import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifficultModalPage } from './difficult-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DifficultModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifficultModalPageRoutingModule {}
