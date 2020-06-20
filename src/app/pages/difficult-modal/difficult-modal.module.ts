import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { IonicModule } from "@ionic/angular";

import { DifficultModalPageRoutingModule } from "./difficult-modal-routing.module";

import { DifficultModalPage } from "./difficult-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifficultModalPageRoutingModule,
    TranslateModule,
    PipesModule,
  ],
  declarations: [DifficultModalPage],
  entryComponents: [DifficultModalPage],
})
export class DifficultModalPageModule {}
