import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
    { title: "trier", icon: "trash", link: "trier" },
    { title: "contact", icon: "person", link: "contact" },
    { title: "config", icon: "construct", link: "parameters" },
  ];
  constructor(private router: Router) {}

  goTo(page) {
    this.router.navigateByUrl(page.link);
  }
}
