import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { MomentModule } from "ngx-moment";

import { RecettesDetailsPageRoutingModule } from "./recettes-details-routing.module";

import { RecettesDetailsPage } from "./recettes-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesDetailsPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    MomentModule,
  ],
  declarations: [RecettesDetailsPage],
  entryComponents: [RecettesDetailsPage],
})
export class RecettesDetailsPageModule {}
