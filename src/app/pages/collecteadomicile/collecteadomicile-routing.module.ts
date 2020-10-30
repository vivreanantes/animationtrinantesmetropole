import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollecteADomicilePage } from './collecteadomicile.page';

const routes: Routes = [
  {
    path: '',
    component: CollecteADomicilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollecteADomicilePageRoutingModule {}
