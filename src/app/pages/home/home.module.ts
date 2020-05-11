import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

@NgModule({
  imports: [CommonModule, IonicModule, TranslateModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
