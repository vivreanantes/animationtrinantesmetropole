import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { IonicModule } from "@ionic/angular";

import { CarteFiltresPageRoutingModule } from "./carte-filtres-routing.module";

import { CarteFiltresPage } from "./carte-filtres.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteFiltresPageRoutingModule,
    TranslateModule,
    PipesModule,
  ],
  declarations: [CarteFiltresPage],
  entryComponents: [CarteFiltresPage],
})
export class CarteFiltresPageModule {}
