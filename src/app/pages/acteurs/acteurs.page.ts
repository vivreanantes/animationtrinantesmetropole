import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActeursDetailsPage } from "../acteurs-details/acteurs-details.page";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-acteurs",
  templateUrl: "./acteurs.page.html",
  styleUrls: ["./acteurs.page.scss"],
})
export class ActeursPage implements OnInit {
  filtres: Array<any> = [];
  acteurs: Array<any> = [];
  input: string = null;

  constructor(
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { acteurs: any }) => {
      this.filtres = Object.keys(data.acteurs);
      this.acteurs = data.acteurs;
      this.input = null;
    });
  }

  openUrl(url) {
    window.open(url, "_system");
  }
  async details(item) {
    const modal = await this.modalController.create({
      component: ActeursDetailsPage,
      componentProps: {
        acteurs: item,
      },
    });
    return await modal.present();
  }
}
