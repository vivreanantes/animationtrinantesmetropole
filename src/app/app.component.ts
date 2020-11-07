import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";
import { LangageService } from "./services/langage.service";

import { HomeCollectModsHandler } from "./handlers/home-collect-mods.handler";
import { DifficultHandler } from "./handlers/difficult.handler";
import * as moment from "moment";
moment.locale("fr");

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  pages: Array<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private langageService: LangageService,
    private homeCollectModsHandler: HomeCollectModsHandler,
    private difficultHandler: DifficultHandler
  ) {
    this.pages = [
      { title: "accueil", icon: "leaf", link: "home" },
      { title: "trier2", icon: "trash", link: "trier2" },
      { title: "carte", icon: "trash", link: "carte" },
      { title: "jeux", icon: "leaf", link: "quiz" },
      { title: "cdlr", icon: "help", link: "codedelaroute" },
	    { title: "collecteadomicile", icon: "trash", link: "home" },
      { title: "trisac", icon: "construct", link: "trisac" },
      { title: "acteurs", icon: "construct", link: "acteurs" },
      { title: "recettes", icon: "construct", link: "recettes" },
      { title: "fiches", icon: "construct", link: "fiches" },
      { title: "config", icon: "construct", link: "parameters" },
      { title: "contact", icon: "person", link: "contact" },
    ];
    this.initializeApp();
  }

  initializeApp() {
    // Initialisation de la langue par defaut
    this.langageService.init();

    //Initialisation de type de tri par defaut
    this.homeCollectModsHandler.init();

    //Initialisation de la difficulté
    this.difficultHandler.init();

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.router.navigateByUrl(page.link);
  }
}
