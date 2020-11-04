import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FichesPageRoutingModule } from "./fiches-routing.module";
import { NguCarouselModule } from "@ngu/carousel";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { FichePageModule } from "../fiche/fiche.module";

import { FichesPage } from "./fiches.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    NguCarouselModule,
    PipesModule,
    ComponentsModule,
    FichesPageRoutingModule,
    FichePageModule
  ],
  declarations: [FichesPage],
})
export class FichesPageModule {}
