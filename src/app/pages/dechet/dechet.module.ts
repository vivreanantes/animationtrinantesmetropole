import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { CollectePageModule } from "../collecte/collecte.module";
import { FichePageModule } from "../fiche/fiche.module";
import { PipesModule } from "../../pipes/pipe.module";
import { DechetPage } from "./dechet.page";
import { DechetPageRoutingModule } from "./dechet-routing.module"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DechetPageRoutingModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
    CollectePageModule,
    FichePageModule
  ],
  declarations: [DechetPage]
})
export class DechetPageModule { }
