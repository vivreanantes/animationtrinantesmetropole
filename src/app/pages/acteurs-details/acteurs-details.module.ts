import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { MomentModule } from "ngx-moment";

import { ActeursDetailsPageRoutingModule } from "./acteurs-details-routing.module";

import { ActeursDetailsPage } from "./acteurs-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActeursDetailsPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    MomentModule,
  ],
  declarations: [ActeursDetailsPage],
  entryComponents: [ActeursDetailsPage],
})
export class ActeursDetailsPageModule {}
