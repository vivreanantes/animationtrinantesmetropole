import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodedelaroutePage } from './codedelaroute.page';

const routes: Routes = [
  {
    path: '',
    component: CodedelaroutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodedelaroutePageRoutingModule {}
