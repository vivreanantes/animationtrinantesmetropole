import { Component } from "@angular/core";

import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  currentHomeCollectModsType: string = null;
  currentHomeCollectModsMco: string = null;
  pages = [
    { title: "trier2", icon: "trash", link: "trier2" },
    { title: "carte", icon: "map", link: "carte" },
    { title: "jeux", icon: "leaf", link: "quiz" },
    { title: "cdlr", icon: "help", link: "codedelaroute" },
    { title: "collecteadomicile", icon: "trash", link: "home" },
    { title: "trisac", icon: "construct", link: "trisac" },
    { title: "acteurs", icon: "construct", link: "acteurs" },
    { title: "recettes", icon: "construct", link: "recettes" },
    { title: "fiches", icon: "trash", link: "fiches" },
    { title: "config", icon: "construct", link: "parameters" },
    { title: "contact", icon: "person", link: "contact" }
  ];
  constructor(
    private homeCollectModsHandler: HomeCollectModsHandler
  ) { }

  ngOnInit() {
    this.init();
  }

  /**
   * Initialise le jeu
   */
  init() {
    this.currentHomeCollectModsType = this.homeCollectModsHandler.get().type;
    this.currentHomeCollectModsMco = this.homeCollectModsHandler.get().mco;
  }
}
