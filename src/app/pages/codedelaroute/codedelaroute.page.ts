import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";

import { NavController, AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { NguCarouselConfig } from "@ngu/carousel";

import { Router } from "@angular/router";

import { DebugService } from "../../services/debug.service";
import { DataService } from "../../services/data.service";

import { DifficultHandler } from "../../handlers/difficult.handler";
import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";


declare var $: any; 

@Component({
  selector: "app-codedelaroute",
  templateUrl: "./codedelaroute.page.html",
  styleUrls: ["./codedelaroute.page.scss"]
})
export class CodedelaroutePage implements OnInit {
  @ViewChildren("rep") reponsesEl: QueryList<ElementRef>;
  currentHomeCollectModsType: string = null;
  currentLang: string = null;
  currentDifficult: string = null;
  currentQcm: any = null;
  list: Array<any> = [];

  totalQuestion: number = 3;
  questionIndex: number = 0;
  questions: Array<any> = [];
  reponses: Array<any> = [];
  onList: boolean = true;
  onSelect: boolean = false;
  onAdvise: boolean = false;
  onOver: boolean = false;
  goodAnswers: number = 0;
  score: number = null;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: false,
    },
    load: 2,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
  };

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public navCtrl: NavController,
    private alertController: AlertController,
    private dataService: DataService,
    private debugService: DebugService,
    private difficultHandler: DifficultHandler,
    private homeCollectModsHandler: HomeCollectModsHandler
  ) {}

  ngOnInit() {
    this.init();
  }

  /**
   * Initialise le jeu
   */
  init() {
    this.onList = true;
    this.onSelect = false;
    this.onAdvise = false;
    this.onOver = false;
    this.questionIndex = 0;
    this.score = 0;
    this._getList();
    this.currentDifficult = this.difficultHandler.get().code;
    this.currentHomeCollectModsType = this.homeCollectModsHandler.get().type;

  }

  /**
   * Retourne les qcm accessible
   */
  private _getList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataService
        .get("codedelaroute/list.json")
        .then((data) => {
          this.dataService.filter(data, this._getFilter()).then((list) => {
            this.list = list;
            resolve();
          });
        })
        .catch((error) => {
          this.debugService.log(error);
          reject(error);
        });
    });
  }

  /**
   *
   * @param file retourne le questionnaire selectionné
   */
  private _getQuestions(file: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataService
        .get("codedelaroute/" + file + ".json")
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          this.debugService.log(error);
          reject(error);
        });
    });
  }

  /**
   * Initialise le tableau de questions
   */
  initQuestion(item: any) {
    this.currentQcm = item;
    this.onSelect = false;
    this.onAdvise = false;
    this.onOver = false;
    this._getQuestions(item.file).then((questions) => {
      this.onList = false;
      this.questions = questions;
      this.questionIndex = 0;
      this.goodAnswers = 0;
    });
  }
  /**
   * Passe à la question suivante
   */
  nextQuestion() {
    this.onSelect = false;
    this.onAdvise = false;
    setTimeout(() => {
      this.cancel();
      if (this.questionIndex < this.questions.length - 1) {
        // Lance la question suivante
        this.questionIndex++;
      } else {
        // Affiche le restultat
        this.onOver = true;
        this.score = Math.round((this.goodAnswers * 4) / this.questions.length);
      }
    }, 300);
  }

  /**
   * Evenement de Drop de l'objet sur une reponse
   * @param e Event
   * @param reponseId String
   */
  drop(e: any, reponseId: string) {
    this.onSelect = true;
    $("#garbage").addClass("on-drag");
    $(e.target).addClass("selected");
    this._getReponse(reponseId).then((reponse) => {
      this.questions[this.questionIndex].userReponse = reponse;
    });
  }
  /**
   * Evenement de clique sur un reponse
   * @param e Event
   * @param reponseId
   */
  clickReponse(e: any, reponseId: string) {
    if (this.onSelect === false) {
      this.onSelect = true;
      this.drop(e, reponseId);
    } else if (
      this.onSelect === true &&
      this.questions[this.questionIndex].userReponse.id === reponseId
    ) {
      this.cancel();
    } else {
      this.cancel().then(() => {
        this.drop(e, reponseId);
      });
    }
  }
  /**
   * Confirme le choix de reponse
   */
  confirm() {
    let t = this;
    this.questions[this.questionIndex].reponses.forEach((reponse) => {
      if (reponse.id === t.questions[t.questionIndex].reponse) {
        reponse.isTrue = true;
        setTimeout(() => {
          if (
            t.questions[t.questionIndex].reponse ===
            t.questions[t.questionIndex].userReponse.id
          ) {
            t.goodAnswers++;
            t.questions[t.questionIndex].isTrue = true;
          } else {
            t.questions[t.questionIndex].isTrue = false;
          }
          t.onSelect = false;
          t.onAdvise = true;
        }, 300);
      }
    });
  }
  /**
   * Annule la selection d'une reponse
   */
  cancel() {
    return new Promise((resolve) => {
      if (this.questions[this.questionIndex].userReponse) {
        this.onSelect = false;
        this.reponsesEl.map((reponse, index) => {
          $(reponse.nativeElement).removeClass("selected");
          if (index === this.reponsesEl.length - 1) {
            this.questions[this.questionIndex].userReponse = false;
            this.onAdvise = false;
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
  /**
   * Relance le quiz
   */
  restart() {
    this.translateService
      .get([
        "quiz_restart_confirm_title",
        "quiz_restart_confirm_txt",
        "cancel",
        "quiz_restart_confirm_yes",
      ])
      .subscribe((res: any) => {
        this._alert(
          res["quiz_restart_confirm_title"],
          res["quiz_restart_confirm_txt"],
          [
            {
              text: res["cancel"],
              handler: () => {},
            },
            {
              text: res["quiz_restart_confirm_yes"],
              handler: () => {
                this.initQuestion(this.currentQcm);
              },
            },
          ]
        );
      });
  }

  /**
   * Ouvre la popup de changement de difficulté
   */
  changeDifficult() {
    this.difficultHandler.showConfigPanel((difficult) => {
      this.currentDifficult = difficult.code;
      this.init();
    });
  }

  /**
   * Redirige vers la page de contact
   */
  contact() {
    this.router.navigateByUrl("contact");
  }

  /**
   * Retourne le filtre actif
   */
  private _getFilter() {
    let filter: Array<string> = [];
    if (this.currentHomeCollectModsType) {
      filter.push(this.currentHomeCollectModsType);
    }
    if (this.currentDifficult) { filter.push(this.currentDifficult); }
    return filter;
  }

  /**
   * Controle si la reponse est valide
   * @param reponseId String
   */
  private _isGoodReponse(reponseId: string) {
    return new Promise((resolve) => {
      let index: number = 0,
        isGood: Boolean = false;
      this.questions[this.questionIndex].reponses.forEach((reponse) => {
        if (reponse === reponseId) {
          isGood = true;
        }
        index++;
        if (index === this.questions[this.questionIndex].reponses.length) {
          resolve(isGood);
        }
      });
    });
  }
  /**
   * Renvoi la reponse correspondant
   * @param reponseId String
   */
  private _getReponse(reponseId: string) {
    return new Promise((resolve) => {
      this.questions[this.questionIndex].reponses.forEach((reponse) => {
        if (reponse.id === reponseId) {
          resolve(reponse);
        }
      });
    });
  }

  async _alert(header: string, message: string, buttons: Array<any>) {
    const alert = await this.alertController.create({
      message: header,
      subHeader: message,
      buttons: buttons,
    });
    await alert.present();
  }
}
