import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-telephone-modal",
  templateUrl: "./telephone-modal.page.html",
  styleUrls: ["./telephone-modal.page.scss"],
})
export class TelephoneModalPage {
  @Input() phones: Array<string>;

  constructor() {}
}
