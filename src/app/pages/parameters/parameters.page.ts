import { Component, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LangageService } from "../../services/langage.service";

import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";

import { DomicileModalPage } from "../domicile-modal/domicile-modal.page";
@Component({
  selector: "app-parameters",
  templateUrl: "./parameters.page.html",
  styleUrls: ["./parameters.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
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
  }

  setLangue(code: string) {
    this.currentLang = code;
    this.langageService.use(code);
  }
  setHomeCollectMods(tri: any) {
    this.currentHomeCollectMods = this.homeCollectModsHandler.set(tri);
  }

  async collectSearch() {
    const modal = await this.modalController.create({
      component: DomicileModalPage,
      componentProps: {
        callback: (address) => {
          this.currentHomeCollectMods.address = address;
          this.currentHomeCollectMods = this.homeCollectModsHandler.set(
            this.currentHomeCollectMods
          );
        },
      },
    });
    return await modal.present();
  }
}
