import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipe.module";
import { StructurePageModule } from "../structure/structure.module";
import { ComponentsModule } from "../../components/components.module";
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { CartePageRoutingModule } from "./carte-routing.module";

import { CartePage } from "./carte.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartePageRoutingModule,
    LeafletModule,
    StructurePageModule,
    TranslateModule,
    PipesModule,
    ComponentsModule,
  ],
  providers: [Geolocation],
  declarations: [CartePage],
})
export class CartePageModule { }
