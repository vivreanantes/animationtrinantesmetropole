import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";

import { ParametersPageRoutingModule } from "./parameters-routing.module";

import { ParametersPage } from "./parameters.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametersPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
  ],
  declarations: [ParametersPage],
})
export class ParametersPageModule {}
