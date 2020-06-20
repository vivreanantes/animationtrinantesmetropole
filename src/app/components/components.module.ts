import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarsComponent } from "./stars/stars.component";
import { ButtonMenuComponent } from "./button-menu/button-menu.component";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { MomentModule } from "ngx-moment";
import { OsmHoraireComponent } from "./osm-horaire/osm-horaire.component";

@NgModule({
  declarations: [StarsComponent, ButtonMenuComponent, OsmHoraireComponent],
  imports: [CommonModule, IonicModule, TranslateModule, MomentModule],
  exports: [StarsComponent, ButtonMenuComponent, OsmHoraireComponent],
})
export class ComponentsModule {}
