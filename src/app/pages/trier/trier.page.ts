import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router, ActivatedRoute } from '@angular/router';
import { LangageService } from "../../services/langage.service";

@Component({
  selector: "app-trier",
  templateUrl: "./trier.page.html",
  styleUrls: ["./trier.page.scss"]
})
export class TrierPage implements OnInit {
  language: string = "fr";
  input: string = null;
  categories: Array<any> = [];
  dechets: Array<any> = [];
  search: Array<any> = [];
  filtres: any = {};
  onSearch: Boolean = false;

  constructor(
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private langageService: LangageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.language = this.langageService.get();
    this.activatedRoute.data.subscribe(data => {
      this.categories = data.categories;
      this.dechets = data.dechets;
    });
    this.activatedRoute.queryParams.subscribe(data => {
      if (data.search) {
        this.onSearch = true;
        this.input = data.search;
        this.filtre(data.search);
      }
    })
  }

  /**
   * Changement du filtre
   */
  onChangeFiltre(input) {
    if (input) {
      this._setUrl({ search: input.toLowerCase() });
    } else {
      this.cleanFiltre();
    }
  }

  private _setUrl(datas: any) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: datas,

      });
  }

  /**
   * Remet à zéro le filtre
   */
  cleanFiltre() {
    this.onSearch = false;
    this.input = null;
    this._setUrl(null);
    this.filtre();
  }

  /**
   * Filtre les propositions
   */
  filtre(input?: any) {
    if (input) {
      this.search = this.dechets.filter(dechet => {
        return this.language === "fr" ? dechet.nom.toLowerCase().indexOf(input) > -1 : dechet.nom_en.toLowerCase().indexOf(input) > -1;
      });
    } else {
      this.search = [];
    }
  }
}
