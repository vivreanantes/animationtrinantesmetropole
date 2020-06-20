import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from '@ionic/angular';

import { CategorieDechetPageRoutingModule } from './categorie-dechet-routing.module';

import { CategorieDechetPage } from './categorie-dechet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieDechetPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [CategorieDechetPage]
})
export class CategorieDechetPageModule { }
