import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CollecteADomicilePageRoutingModule } from "./collecteadomicile-routing.module";
import { NguCarouselModule } from "@ngu/carousel";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";

import { CollecteADomicilePage } from "./collecteadomicile.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    NguCarouselModule,
    PipesModule,
    ComponentsModule,
    CollecteADomicilePageRoutingModule
  ],
  declarations: [CollecteADomicilePage],
})
export class CollecteADomicilePageModule {}
