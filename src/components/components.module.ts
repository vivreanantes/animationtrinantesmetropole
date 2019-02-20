import { NgModule } from "@angular/core";
import { StarsComponent } from "./stars/stars";
import { IonicModule } from "ionic-angular";
@NgModule({
  declarations: [StarsComponent],
  imports: [IonicModule],
  exports: [StarsComponent]
})
export class ComponentsModule {}
