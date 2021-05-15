import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-jourdecollecte-modal',
  templateUrl: './jourdecollecte-modal.page.html',
  styleUrls: ['./jourdecollecte-modal.page.scss'],
})
export class JourDeCollecteModalPage implements OnInit {
  item: any = {};
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // debugger;
    console.log("abc");
    /*this._init(this.navParams.get("trisac")).then((item) => {
      this.item = item;
    });*/
  }

  close() {
    this.modalController.dismiss();
  }
  
}
