import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { NguCarouselModule } from "@ngu/carousel";

import { CodedelaroutePageRoutingModule } from "./codedelaroute-routing.module";

import { CodedelaroutePage } from "./codedelaroute.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodedelaroutePageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    NguCarouselModule,
  ],
  declarations: [CodedelaroutePage],
})
export class CodedelaroutePageModule {}
