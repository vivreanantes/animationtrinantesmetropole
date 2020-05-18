import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from "@ionic/angular";
import { NguCarouselConfig } from "@ngu/carousel";
import { CollectePage } from "../collecte/collecte.page";
import { FichePage } from "../fiche/fiche.page";
import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";

@Component({
  selector: "app-dechet",
  templateUrl: "./dechet.page.html",
  styleUrls: ["./dechet.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DechetPage implements OnInit {
  @Input('dechet') dechet;
  item: any = {};
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 6, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: false,
      hideOnSingleSlide: true,
    },
    load: 3,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
  };
  constructor(
    public modalController: ModalController,
    public homeCollectModsHandler: HomeCollectModsHandler,
    private activatedRoute: ActivatedRoute,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { dechet: any }) => {
      this.item = data.dechet;
    });
  }

  /**
   * Affiche la fiche du la collecte
   */
  async voirCollec(item: any) {
    const modal = await this.modalController.create({
      component: CollectePage,
      componentProps: {
        collect: item,
      },
    });
    return await modal.present();
  }

  /**
   * Affiche la fiche information
   */
  async voirAdvice(item: any) {
    if (item.fiche) {
      const modal = await this.modalController.create({
        component: FichePage,
        componentProps: {
          fiche: item,
        },
      });
      return await modal.present();
    }
    return false;
  }

  back() {
    this.navController.back();
  }
}
