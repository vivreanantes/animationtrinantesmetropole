import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from "../../components/components.module";
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule, ComponentsModule],
})
export class HomePageRoutingModule {}
