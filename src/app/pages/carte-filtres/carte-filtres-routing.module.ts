import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteFiltresPage } from './carte-filtres.page';

const routes: Routes = [
  {
    path: '',
    component: CarteFiltresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteFiltresPageRoutingModule {}
