import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FilterPipe } from "./filter.pipe";
import { LangPipe } from "./lang.pipe";
import { KeysPipe } from "./keys.pipe";
import { ValuesPipe } from "./values.pipe";
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FilterPipe, LangPipe, KeysPipe, ValuesPipe],
  exports: [FilterPipe, LangPipe, KeysPipe, ValuesPipe],
})
export class PipesModule {}
