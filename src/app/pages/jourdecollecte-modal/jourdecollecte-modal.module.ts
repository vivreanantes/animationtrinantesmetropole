import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from '@ionic/angular';

import { JourDeCollecteModalPageRoutingModule } from './jourdecollecte-modal-routing.module';

import { JourDeCollecteModalPage } from './jourdecollecte-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourDeCollecteModalPageRoutingModule,
    TranslateModule,
  ],
  declarations: [JourDeCollecteModalPage],
  entryComponents: [JourDeCollecteModalPage],
})
export class JourDeCollecteModalPageModule {}