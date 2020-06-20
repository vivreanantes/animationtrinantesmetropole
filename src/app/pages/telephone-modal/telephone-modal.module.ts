import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { IonicModule } from "@ionic/angular";

import { TelephoneModalPageRoutingModule } from "./telephone-modal-routing.module";

import { TelephoneModalPage } from "./telephone-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelephoneModalPageRoutingModule,
    TranslateModule,
    PipesModule,
  ],
  declarations: [TelephoneModalPage],
  entryComponents: [TelephoneModalPage],
})
export class TelephoneModalPageModule {}
