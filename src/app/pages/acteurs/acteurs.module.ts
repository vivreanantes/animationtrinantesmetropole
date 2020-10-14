import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { ActeursDetailsPageModule } from "../acteurs-details/acteurs-details.module";
import { ActeursPageRoutingModule } from "./acteurs-routing.module";
import { MomentModule } from "ngx-moment";

import { ActeursPage } from "./acteurs.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActeursPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    ActeursDetailsPageModule,
    MomentModule,
  ],
  declarations: [ActeursPage],
})
export class ActeursPageModule {}
