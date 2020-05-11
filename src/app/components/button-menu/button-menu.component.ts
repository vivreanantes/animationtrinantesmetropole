import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "button-menu",
  templateUrl: "./button-menu.component.html",
  styleUrls: ["./button-menu.component.scss"],
})
export class ButtonMenuComponent {
  constructor(private menuController: MenuController) {}

  toggle() {
    this.menuController.toggle();
  }
}
