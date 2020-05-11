import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { DebugService } from "./debug.service";
import { LangageService } from "./langage.service";

@NgModule({
  providers: [DataService, DebugService, LangageService],
})
export class ServicesModule {}
