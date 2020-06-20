import { NgModule } from "@angular/core";
import { DifficultHandler } from "./difficult.handler";
import { HomeCollectModsHandler } from "./home-collect-mods.handler";

@NgModule({
  providers: [DifficultHandler, HomeCollectModsHandler],
})
export class HandlersModule {}
