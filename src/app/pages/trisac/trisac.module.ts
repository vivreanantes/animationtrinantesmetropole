import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { ComponentsModule } from "../../components/components.module";
import { IonicModule } from "@ionic/angular";
import { TrisacDetailsPageModule } from "../trisac-details/trisac-details.module";
import { TrisacPageRoutingModule } from "./trisac-routing.module";
import { MomentModule } from "ngx-moment";

import { TrisacPage } from "./trisac.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrisacPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    TrisacDetailsPageModule,
    MomentModule,
  ],
  declarations: [TrisacPage],
})
export class TrisacPageModule {}
