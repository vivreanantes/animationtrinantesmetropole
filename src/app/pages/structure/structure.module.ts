import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { NguCarouselModule } from "@ngu/carousel";
import { TelephoneModalPageModule } from "../telephone-modal/telephone-modal.module";

import { StructurePageRoutingModule } from "./structure-routing.module";

import { StructurePage } from "./structure.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StructurePageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    NguCarouselModule,
    TelephoneModalPageModule,
  ],
  declarations: [StructurePage],
  entryComponents: [StructurePage],
})
export class StructurePageModule {}
