import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrisacPage } from './trisac.page';

const routes: Routes = [
  {
    path: '',
    component: TrisacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrisacPageRoutingModule {}
