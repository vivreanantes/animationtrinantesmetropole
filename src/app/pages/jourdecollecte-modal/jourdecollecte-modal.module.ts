import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourDeCollecteModalPageRoutingModule } from './jourdecollecte-modal-routing.module';

import { JourDeCollecteModalPage } from './jourdecollecte-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourDeCollecteModalPageRoutingModule
  ],
  declarations: [JourDeCollecteModalPage]
})
export class JourDeCollecteModalPageModule {}
