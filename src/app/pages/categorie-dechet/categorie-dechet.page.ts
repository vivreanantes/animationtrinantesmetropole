import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-categorie-dechet',
  templateUrl: './categorie-dechet.page.html',
  styleUrls: ['./categorie-dechet.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CategorieDechetPage implements OnInit {
  categorie: any;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this._init();
  }

  private _init() {
    this.activatedRoute.data.subscribe((data: { categorie: any }) => {
      this.categorie = data.categorie;
    });
  }

  back() {
    this.navController.back();
  }

}
