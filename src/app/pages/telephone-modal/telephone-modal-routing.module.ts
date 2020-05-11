import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelephoneModalPage } from './telephone-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TelephoneModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelephoneModalPageRoutingModule {}
