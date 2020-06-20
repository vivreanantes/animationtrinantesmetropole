import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { MomentModule } from "ngx-moment";

import { TrisacDetailsPageRoutingModule } from "./trisac-details-routing.module";

import { TrisacDetailsPage } from "./trisac-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrisacDetailsPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    MomentModule,
  ],
  declarations: [TrisacDetailsPage],
  entryComponents: [TrisacDetailsPage],
})
export class TrisacDetailsPageModule {}
