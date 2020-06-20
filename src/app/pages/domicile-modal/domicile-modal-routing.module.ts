import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomicileModalPage } from './domicile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DomicileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomicileModalPageRoutingModule {}
