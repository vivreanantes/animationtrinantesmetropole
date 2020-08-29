import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dechet2Page } from './dechet2.page';

const routes: Routes = [
  {
    path: '',
    component: Dechet2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dechet2PageRoutingModule {}
