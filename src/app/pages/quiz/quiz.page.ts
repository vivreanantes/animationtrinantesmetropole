import {
  Component,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  ElementRef,
  QueryList,
} from "@angular/core";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { NguCarouselConfig } from "@ngu/carousel";
import { Router } from "@angular/router";

import { DebugService } from "../../services/debug.service";
import { DataService } from "../../services/data.service";

import { HomeCollectModsHandler } from "../../handlers/home-collect-mods.handler";
import { DifficultHandler } from "../../handlers/difficult.handler";

declare var $: any;
import * as interact from "interactjs/dist/interact.js";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class QuizPage {
  @ViewChild("garbage", { static: false }) garbageEl: ElementRef;
  @ViewChildren("rep") reponsesEl: QueryList<ElementRef>;
  private _element: any = null;
  currentLang: string = null;
  currentHomeCollectModsType: string = null;
  currentHomeCollectModsMco: string = null;
  currentDifficult: string = null;
  error: boolean = false;
  totalQuestion: number = 10;
  questionIndex: number = 0;
  questions: Array<any> = [];
  reponses: Array<any> = [];
  onDrag: boolean = false;
  onSelect: boolean = false;
  onConfirm: boolean = false;
  onAdvise: boolean = false;
  onOver: boolean = false;
  goodAnswers: number = 0;
  score: number = null;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
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
    private alertController: AlertController,
    private dataService: DataService,
    private debugService: DebugService,
    private homeCollectModsHandler: HomeCollectModsHandler,
    private difficultHandler: DifficultHandler
  ) {}

  ionViewWillEnter() {
    this.questionIndex = 0;
    this.initQuestion().then(() => {
      this._initBrowserDragAndDrop();
    });
    this.currentHomeCollectModsType = this.homeCollectModsHandler.get().type;
    this.currentHomeCollectModsMco = this.homeCollectModsHandler.get().mco;
    this.currentDifficult = this.difficultHandler.get().code;
  }

  /**
   * Retourne un tableau d'identifiant unique
   * @param length
   */
  private getUniques(length: number) {
    let list: Array<number> = [];
    while (list.length < this.totalQuestion) {
      let number = Math.floor(Math.random() * length);
      if (list.indexOf(number) === -1) {
        list.push(number);
      }
    }
    return list;
  }

  /**
   * Initialise le tableau de questions
   */
  initQuestion() {
    return new Promise((resolve, reject) => {
      this.onDrag = false;
      this.onSelect = false;
      this.onConfirm = false;
      this.onAdvise = false;
      this.onOver = false;
      this.dataService
        .get("QuizData.js")
        .then((data) => {
          this.dataService
            .filter(data.questions, this._getFilter())
            .then((questions) => {
              this.questionIndex = 0;
              this.goodAnswers = 0;
              // PréSelection des questions
              let list: Array<any> = [];
              this.getUniques(questions.length).forEach((key) => {
                list.push(questions[key]);
                if (list.length === this.totalQuestion) {
                  this.questions = list;
                }
              });

              // Préselection des réponses
              this.reponses = data.reponses;
              setTimeout(() => {
                this._element = $("#garbage");
                resolve();
              }, 500);
            });
        })
        .catch((error) => {
          this.error = true;
          this.debugService.log(error);
          reject(error);
        });
    });
  }
  /**
   * Passe à la question suivante
   */
  nextQuestion() {
    this.onSelect = false;
    this.onConfirm = false;
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
   * Evenement de debut du Drag
   * @param e Event
   */
  dragstart(e) {
    this.onDrag = true;
    $(e.target).addClass("on-drag");
  }
  /**
   * Evenement de fin du Drag
   * @param e Event
   */
  dragend(e?: any) {
    this.onDrag = false;
    $(e.target).removeClass("on-drag");
  }
  /**
   * Evenement de debut de survol d'une reponse avec l'objet
   * @param e Event
   * @param reponseId String
   */
  dragenter(e: any) {
    $(e.target).addClass("on-drag-enter");
  }
  /**
   * Evenement de fin de survol d'une reponse avec l'objet
   * @param e Event
   * @param reponseId String
   */
  dragleave(e: any) {
    $(e.target).removeClass("on-drag-enter");
  }
  /**
   * Evenement de Drop de l'objet sur une reponse
   * @param e Event
   * @param reponseId String
   */
  drop(e: any, reponseId?:string) {
    // No confirm popup
    let t = this;
    let id = reponseId?reponseId:e.target.id;
    this._isGoodReponse(id).then((resolve) => {
      if (resolve === true) this.goodAnswers++;
      t.questions[t.questionIndex].isTrue = resolve;
      t.onConfirm = true;
      t.onSelect = false;
      t.onAdvise = true;
    });
    this.dragleave(e);
  }
  /**
   * Evenement de clic sur une reponse
   * @param e Event
   * @param reponseId
   */
  clickReponse(e: any, reponseId: string) {
    if (this.onSelect === false) {
      this.onSelect = true;
      this.drop(e,reponseId);
    } else if (
      this.onSelect === true &&
      this.questions[this.questionIndex].userReponse.id === reponseId
    ) {
      this.cancel();
    } else {
      let index = 0;
      this.reponses.forEach((reponse) => {
        if (reponse.id !== reponseId) {
          this.cancel();
        }
        index++;
        if (index === this.reponses.length) {
          this.drop(e,reponseId);
        }
      });
    }
  }
  /**
   * Confirme le choix de reponse
   */
  confirm() {
    let t = this;
    this._isGoodReponse(t.questions[t.questionIndex].userReponse.id).then(
      (resolve) => {
        if (resolve === true) this.goodAnswers++;
        t.questions[t.questionIndex].isTrue = resolve;
        t.onConfirm = true;
        t.onSelect = false;
        t.onAdvise = true;
      }
    );
  }
  /**
   * Annule la selection d'une reponse
   */
  cancel() {
    if (this.questions[this.questionIndex].userReponse) {
      this.onSelect = false;
      $("#" + this.questions[this.questionIndex].userReponse.id).removeClass(
        "selected"
      );
      this.questions[this.questionIndex].userReponse = false;
      this.dragend();
      this.onAdvise = false;
    }
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
        this.alert(
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
                this.initQuestion();
              },
            },
          ]
        );
      });
  }
  async alert(header: string, message: string, buttons: Array<any>) {
    const alert = await this.alertController.create({
      message: header,
      subHeader: message,
      buttons: buttons,
    });
    await alert.present();
  }

  /**
   * Ouvre la popup de changement de difficulté
   */
  changeDifficult() {
    this.difficultHandler.showConfigPanel((difficult) => {
      this.currentDifficult = difficult.code;
      this.initQuestion();
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
    if (this.currentHomeCollectModsType)
      filter.push(this.currentHomeCollectModsType);
    if (this.currentDifficult) filter.push(this.currentDifficult);
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
      this.reponses.forEach((reponse) => {
        if (reponse.id === reponseId) {
          resolve(reponse);
        }
      });
    });
  }

  /**
   * Initialise le drag and drop pour les navigateurs
   */
  private _initBrowserDragAndDrop() {
    let t = this;
    t.debugService.log("Browser Drag and drop enabled");
    // t._element.addClass("is-browser");
    interact(this.garbageEl.nativeElement)
      .draggable({
        inertia: false,
        restrict: {
          drag: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 1, bottom: 1, right: 0 },
        },
      })
      .on("dragstart", (event) => {
        t.dragstart(event);
      })
      .on("dragmove", (event) => {
        var target = event.target,
          w = parseInt($(target).width()) / 2,
          x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
          y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform = target.style.transform = `translate(${
          x - w
        }px,${y}px) scale(0.5)`;

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      })
      .on("dragend", (event) => {
        t.dragend(event);
        var target = event.target;
        target.setAttribute("data-x", 0);
        target.setAttribute("data-y", 0);
        event.target.style.webkitTransform = event.target.style.transform = null;
      });

    this.reponsesEl.map((reponseEl) => {
      interact(reponseEl.nativeElement).dropzone({
        overlap: 0.01,
        ondropactivate: (event) => {
          t._element.addClass("on-drag");
        },
        ondragenter: (event) => {
          t.dragenter(event);
        },
        ondragleave: (event) => {
          t.dragleave(event);
        },
        ondrop: (event) => {
          t.drop(event);
        },
      });
    });
  }
}
