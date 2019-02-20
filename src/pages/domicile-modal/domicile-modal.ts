import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

import { DataService } from "../../services/data.service";

@Component({
  selector: "domicile-modal",
  templateUrl: "domicile-modal.html"
})
export class DomicileModalPage {
  callback: any = null;
  searchString: string = null;
  homeCollectModsDatas: Array<any> = [];
  constructor(
    public viewController: ViewController,
    public navParams: NavParams,
    private dataService: DataService
  ) {
    this._initHomeCollectModsDatas();
    this.callback = navParams.get("callback");
  }
  /**
   * Recupère la collection
   */
  private _initHomeCollectModsDatas() {
    this.dataService.get("nantes/HomeCollectModsDatas.js").then(
      datas => {
        this.homeCollectModsDatas = datas;
      },
      error => {}
    );
  }

  selectAdresse(collect: any) {
    this.callback(collect);
    this.close();
  }

  close() {
    this.viewController.dismiss();
  }
}
