import { Component } from "@angular/core";
import { IonicPage, NavController, Nav } from "ionic-angular";

import { QuizPage } from "../quiz/quiz";
import { CodedelaroutePage } from "../codedelaroute/codedelaroute";
import { ContactPage } from "../contact/contact";
import { ParametersPage } from "../parameters/parameters";

@IonicPage({
  name: "Home",
  segment: "home"
})
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private pages = [
    { title: "jeux", component: QuizPage, icon: "leaf" },
    { title: "cdlr", component: CodedelaroutePage, icon: "help" },
    { title: "contact", component: ContactPage, icon: "person" },
    { title: "config", component: ParametersPage, icon: "construct" }
  ];
  constructor(private nav: Nav) {}

  goTo(page) {
    this.nav.setRoot(page.component);
  }
}
