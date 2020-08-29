import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Trier2PageRoutingModule } from "./trier2-routing.module";
import { NguCarouselModule } from "@ngu/carousel";
import { Dechet2PageModule } from "../dechet2/dechet2.module";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";

import { Trier2Page } from "./trier2.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    NguCarouselModule,
    Dechet2PageModule,
    PipesModule,
    ComponentsModule,
    Trier2PageRoutingModule
  ],
  declarations: [Trier2Page],
})
export class Trier2PageModule {}
