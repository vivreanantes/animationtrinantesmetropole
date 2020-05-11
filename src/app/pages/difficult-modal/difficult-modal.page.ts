import { Component } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-difficult-modal",
  templateUrl: "./difficult-modal.page.html",
  styleUrls: ["./difficult-modal.page.scss"],
})
export class DifficultModalPage {
  initDifficult: any = null;
  currentDifficult: any = null;
  difficultList: Array<any> = [];
  onChange: any = null;
  onCancel: any = null;

  constructor(private navParams: NavParams) {
    this.initDifficult = navParams.get("currentDifficult");
    this.currentDifficult = navParams.get("currentDifficult");
    this.difficultList = navParams.get("difficultList");
    this.onChange = navParams.get("onChange");
    this.onCancel = navParams.get("onCancel");
  }

  select(difficult: any) {
    this.currentDifficult = difficult;
  }

  valide() {
    if (this.initDifficult.code !== this.currentDifficult.code) {
      this.onChange(this.currentDifficult);
    } else {
      this.onCancel();
    }
  }
}
