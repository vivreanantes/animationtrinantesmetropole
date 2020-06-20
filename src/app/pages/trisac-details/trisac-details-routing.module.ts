import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrisacDetailsPage } from './trisac-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrisacDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrisacDetailsPageRoutingModule {}
