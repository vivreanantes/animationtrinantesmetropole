import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomicileModalPageRoutingModule } from './domicile-modal-routing.module';

import { DomicileModalPage } from './domicile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomicileModalPageRoutingModule
  ],
  declarations: [DomicileModalPage]
})
export class DomicileModalPageModule {}
