import { Component, ViewChild } from "@angular/core";
import { IonicPage, Platform, MenuController, Nav } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

import { QuizPage } from "../pages/quiz/quiz";
import { CodedelaroutePage } from "../pages/codedelaroute/codedelaroute";
import { ContactPage } from "../pages/contact/contact";
import { ParametersPage } from "../pages/parameters/parameters";

import { LangageService } from "../services/langage.service";

import { HomeCollectModsHandler } from "../handlers/homeCollectMods.handler";
import { DifficultHandler } from "../handlers/difficult.handler";

@IonicPage()
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;
  rootPage: any = QuizPage;
  pages: Array<{ title: string; component: any }>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    public menu: MenuController,
    private langageService: LangageService,
    private homeCollectModsHandler: HomeCollectModsHandler,
    private difficultHandler: DifficultHandler
  ) {
    this.pages = [
      { title: "jeux", component: QuizPage },
      { title: "cdlr", component: CodedelaroutePage },
      { title: "contact", component: ContactPage },
      { title: "config", component: ParametersPage }
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
    });

    // Initialisation de la langue par defaut
    this.langageService.init();

    //Initialisation de type de tri par defaut
    this.homeCollectModsHandler.init();

    //Initialisation de la difficulté
    this.difficultHandler.init();
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
