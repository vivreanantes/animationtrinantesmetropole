import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { RecettesDetailsPageModule } from "../recettes-details/recettes-details.module";
import { RecettesPageRoutingModule } from "./recettes-routing.module";
import { MomentModule } from "ngx-moment";

import { RecettesPage } from "./recettes.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    RecettesDetailsPageModule,
    MomentModule,
  ],
  declarations: [RecettesPage],
})
export class RecettesPageModule {}
