import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TrisacDetailsPage } from "../trisac-details/trisac-details.page";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-trisac",
  templateUrl: "./trisac.page.html",
  styleUrls: ["./trisac.page.scss"],
})
export class TrisacPage implements OnInit {
  filtres: Array<any> = [];
  trisacs: Array<any> = [];
  input: string = null;

  constructor(
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { trisacs: any }) => {
      this.filtres = Object.keys(data.trisacs);
      this.trisacs = data.trisacs;
      this.input = null;
    });
  }

  async details(item) {
    const modal = await this.modalController.create({
      component: TrisacDetailsPage,
      componentProps: {
        trisac: item,
      },
    });
    return await modal.present();
  }
}
