import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  // onOver: boolean = false;
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
  constructor() { }
}
