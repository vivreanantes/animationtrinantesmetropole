import { Component } from "@angular/core";
import { IonicPage, ModalController } from "ionic-angular";

import { LangageService } from "../../services/langage.service";

import { HomeCollectModsHandler } from "../../handlers/homeCollectMods.handler";

import { DomicileModalPage } from "../domicile-modal/domicile-modal";

@IonicPage({
  name: "parametres",
  segment: "parametres"
})
@Component({
  selector: "page-parameters",
  templateUrl: "parameters.html"
})
export class ParametersPage {
  langues: Array<any> = [];
  currentLang: string = null;
  currentHomeCollectMods: any = {};
  homeCollectModsList: Array<any> = [];

  constructor(
    private langageService: LangageService,
    private modalController: ModalController,
    private homeCollectModsHandler: HomeCollectModsHandler
  ) {
    this.langues = this.langageService.list();
    this.currentLang = this.langageService.get();
    this.homeCollectModsList = this.homeCollectModsHandler.getList();
    this.currentHomeCollectMods = this.homeCollectModsHandler.get();
    console.log(this.currentHomeCollectMods);
  }

  setLangue(code: string) {
    this.currentLang = code;
    this.langageService.use(code);
  }
  setHomeCollectMods(tri: any) {
    this.currentHomeCollectMods = this.homeCollectModsHandler.set(tri);
  }
  collectSearch() {
    let modal = this.modalController.create(DomicileModalPage, {
      callback: address => {
        this.currentHomeCollectMods.address = address;
        this.currentHomeCollectMods = this.homeCollectModsHandler.set(
          this.currentHomeCollectMods
        );
      }
    });
    modal.present();
  }
}
