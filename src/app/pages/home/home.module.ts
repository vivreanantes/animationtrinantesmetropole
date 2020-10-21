import { CommonModule } from "@angular/common";
import { HomePage } from "./home.page";
import { HomePageRoutingModule } from "./home-routing.module";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [CommonModule, IonicModule, TranslateModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
