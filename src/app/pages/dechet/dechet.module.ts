import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { CollectePageModule } from "../collecte/collecte.module";
import { FichePageModule } from "../fiche/fiche.module";
import { PipesModule } from "../../pipes/pipe.module";
import { DechetPage } from "./dechet.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CollectePageModule,
    FichePageModule,
    PipesModule,
  ],
  declarations: [DechetPage],
  entryComponents: [DechetPage],
})
export class DechetPageModule {}
