import { NgModule } from "@angular/core";
import { LangPipe } from "./lang/lang";
import { FilterPipe } from './filter/filter';
@NgModule({
  declarations: [LangPipe,
    FilterPipe],
  imports: [],
  exports: [LangPipe,
    FilterPipe]
})
export class PipesModule {}
