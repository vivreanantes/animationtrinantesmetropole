import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrierPage } from './trier.page';

const routes: Routes = [
  {
    path: '',
    component: TrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrierPageRoutingModule {}
