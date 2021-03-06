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
      { title: "jeux", icon: "leaf", link: "quiz" },
      { title: "cdlr", icon: "help", link: "codedelaroute" },
      { title: "carte", icon: "trash", link: "carte" },
      { title: "trier", icon: "trash", link: "trier" },
      { title: "contact", icon: "person", link: "contact" },
      { title: "trisac", icon: "construct", link: "trisac" },
      { title: "config", icon: "construct", link: "parameters" },
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
