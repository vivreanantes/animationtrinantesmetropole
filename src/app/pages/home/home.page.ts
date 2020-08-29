import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  pages = [
    { title: "jeux", icon: "leaf", link: "quiz" },
    { title: "cdlr", icon: "help", link: "codedelaroute" },
    { title: "carte", icon: "map", link: "carte" },
    { title: "trier2", icon: "trash", link: "trier2" },
    { title: "contact", icon: "person", link: "contact" },
    { title: "config", icon: "construct", link: "parameters" },
    { title: "trier", icon: "trash", link: "trier" },
  ];
  constructor() { }
}
