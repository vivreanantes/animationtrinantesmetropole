import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DechetPage } from './dechet.page';

const routes: Routes = [
  {
    path: '',
    component: DechetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DechetPageRoutingModule {}
