import { ButtonMenuComponent } from "./button-menu/button-menu.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MomentModule } from "ngx-moment";
import { NewsComponent } from './news/news.component';
import { NgModule } from "@angular/core";
import { OsmHoraireComponent } from "./osm-horaire/osm-horaire.component";
import { StarsComponent } from "./stars/stars.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [StarsComponent, ButtonMenuComponent, OsmHoraireComponent, NewsComponent],
  imports: [CommonModule, IonicModule, TranslateModule, MomentModule],
  exports: [StarsComponent, ButtonMenuComponent, OsmHoraireComponent, NewsComponent],
})
export class ComponentsModule {}
