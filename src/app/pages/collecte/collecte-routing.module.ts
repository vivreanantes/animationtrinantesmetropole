import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectePage } from './collecte.page';

const routes: Routes = [
  {
    path: '',
    component: CollectePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectePageRoutingModule {}
