import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { RecettesDetailsPage } from "../recettes-details/recettes-details.page";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-recettes",
  templateUrl: "./recettes.page.html",
  styleUrls: ["./recettes.page.scss"],
})
export class RecettesPage implements OnInit {
  filtres: Array<any> = [];
  recettes: Array<any> = [];
  input: string = null;

  constructor(
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { recettes: any }) => {
      this.filtres = Object.keys(data.recettes);
      this.recettes = data.recettes;
      this.input = null;
    });
  }

  openUrl(url) {
    window.open(url, "_system");
  }
  async details(item) {
    const modal = await this.modalController.create({
      component: RecettesDetailsPage,
      componentProps: {
        recettes: item,
      },
    });
    return await modal.present();
  }
}
