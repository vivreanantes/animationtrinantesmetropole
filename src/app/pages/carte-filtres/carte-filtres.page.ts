import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "carte-filtres",
  templateUrl: "./carte-filtres.page.html",
  styleUrls: ["./carte-filtres.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CarteFiltresPage implements OnInit {
  filtres: Array<any> = [];
  onChange: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.filtres = this.navParams.get("filtres");
    this.onChange = this.navParams.get("onChange");
  }

  select(item) {
    item.selected = !item.selected;
  }

  valide() {
    this.modalController.dismiss();
    this.onChange(this.filtres);
  }
}
