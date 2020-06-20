import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PipesModule } from "../../pipes/pipe.module";
import { TranslateModule } from "@ngx-translate/core";
import { ComponentsModule } from "../../components/components.module";
import { ContactPageRoutingModule } from "./contact-routing.module";

import { ContactPage } from "./contact.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    PipesModule,
    ComponentsModule,
    TranslateModule,
  ],
  declarations: [ContactPage],
})
export class ContactPageModule {}
