import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import {
  Platform,
  IonicPage,
  NavController,
  AlertController,
  Slides,
  Nav
} from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { NguCarousel } from "@ngu/carousel";

import { DebugService } from "../../services/debug.service";
import { DataService } from "../../services/data.service";

import { HomeCollectModsHandler } from "../../handlers/homeCollectMods.handler";
import { DifficultHandler } from "../../handlers/difficult.handler";

import { ContactPage } from "../../pages/contact/contact";

import $ from "jquery";
import interact from "interactjs";

@IonicPage({
  name: "Quiz",
  segment: "quiz"
})
@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html"
})
export class QuizPage {
  @ViewChild("slides")
  slides: Slides;

  private _element: any = null;
  private _elementClone: any = null;
  currentLang: string = null;
  currentHomeCollectModsType: string = null;
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
  carouselConfig: NguCarousel = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: false
    },
    load: 2,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };

  constructor(
    private nav: Nav,
    private splashScreen: SplashScreen,
    private platform: Platform,
    private translateService: TranslateService,
    public navCtrl: NavController,
    private alertController: AlertController,
    private dataService: DataService,
    private debugService: DebugService,
    private homeCollectModsHandler: HomeCollectModsHandler,
    private difficultHandler: DifficultHandler
  ) {}

  ionViewDidEnter() {
    this.questionIndex = 0;
    this.initQuestion().then(() => {
      if (this.platform.is("mobile") === false) {
        this._initBrowserDragAndDrop();
      }
      this.splashScreen.hide();
    });
    this.currentHomeCollectModsType = this.homeCollectModsHandler.get().type;
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
        .then(data => {
          this.dataService
            .filter(data.questions, this._getFilter())
            .then(questions => {
              this.questionIndex = 0;
              this.goodAnswers = 0;
              // PréSelection des questions
              let list: Array<any> = [];
              this.getUniques(questions.length).forEach(key => {
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
        .catch(error => {
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
    this._elementClone = document.getElementById("garbage").cloneNode(true);
    $(this._elementClone).addClass("clone");
    $(this._elementClone).css({
      position: "absolute",
      top: "-5000px",
      left: "-5000px",
      width: $(this._element).width(),
      height: $(this._element).height()
    });
    document.body.appendChild(this._elementClone);
    e.dataTransfer.setDragImage(this._elementClone, 50, 50);
    $(this._element).addClass("on-drag");
    $(this._elementClone).addClass("on-drag");
  }
  /**
   * Evenement de fin du Drag
   * @param e Event
   */
  dragend(e?: any) {
    this.onDrag = false;
    $(this._element).removeClass("on-drag");
    $(".garbage.clone").remove();
    this._elementClone = null;
  }
  /**
   * Evenement de debut de survol d'une reponse avec l'objet
   * @param e Event
   * @param reponseId String
   */
  dragenter(e: any, reponseId: string) {
    $("#" + reponseId).addClass("on-drag-enter");
  }
  /**
   * Evenement de fin de survol d'une reponse avec l'objet
   * @param e Event
   * @param reponseId String
   */
  dragleave(e: any, reponseId: string) {
    $("#" + reponseId).removeClass("on-drag-enter");
  }
  /**
   * Evenement de Drop de l'objet sur une reponse
   * @param e Event
   * @param reponseId String
   */
  drop(e: any, reponseId: string) {

    // No confirm popup
    let t = this;
    this._isGoodReponse(reponseId).then(
      resolve => {
        if (resolve === true) this.goodAnswers++;
        t.questions[t.questionIndex].isTrue = resolve;
        t.onConfirm = true;
        t.onSelect = false;
        t.onAdvise = true;
      }
    );
/*

    this.onDrag = false;
    this.onSelect = true;
    this.dragleave(e, reponseId);
    $(this._element).addClass("on-drag");
    $("#" + reponseId).addClass("selected");
    this._getReponse(reponseId).then(reponse => {
      this.questions[this.questionIndex].userReponse = reponse;
    });*/
  }
  /**
   * Evenement de clic sur une reponse
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
      let index = 0;
      this.reponses.forEach(reponse => {
        if (reponse.id !== reponseId) {
          this.cancel();
        }
        index++;
        if (index === this.reponses.length) {
          this.drop(e, reponseId);
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
      resolve => {
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
        "quiz_restart_confirm_yes"
      ])
      .subscribe((res: any) => {
        let confirm = this.alertController.create({
          title: res["quiz_restart_confirm_title"],
          message: res["quiz_restart_confirm_txt"],
          buttons: [
            {
              text: res["cancel"],
              handler: () => {}
            },
            {
              text: res["quiz_restart_confirm_yes"],
              handler: () => {
                this.initQuestion();
              }
            }
          ]
        });
        confirm.present();
      });
  }

  /**
   * Ouvre la popup de changement de difficulté
   */
  changeDifficult() {
    this.difficultHandler.showConfigPanel(difficult => {
      this.currentDifficult = difficult.code;
      this.initQuestion();
    });
  }

  /**
   * Redirige vers la page de contact
   */
  contact() {
    this.nav.setRoot(ContactPage);
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
    return new Promise(resolve => {
      let index: number = 0,
        isGood: Boolean = false;
      this.questions[this.questionIndex].reponses.forEach(reponse => {
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
    return new Promise(resolve => {
      this.reponses.forEach(reponse => {
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
    t._element.addClass("is-browser");
    interact(".reponse").dropzone({
      overlap: 0.5,
      ondropactivate: event => {
        t._element.addClass("on-drag");
      },
      ondragenter: event => {
        t.dragenter(event, event.target.id);
      },
      ondragleave: event => {
        t.dragleave(event, event.target.id);
      },
      ondrop: event => {
        t.drop(event, event.target.id);
      }
    });
    let x = 0,
      y = 0;
    interact("#garbage")
      .draggable({
        inertia: true,
        restrict: {
          restriction: "parent",
          endOnly: true
        }
      })
      .on("dragmove", event => {
        x += event.dx;
        y += event.dy;
        event.target.style.webkitTransform = event.target.style.transform =
          "translate(" + x + "px, " + y + "px)";
      })
      .on("dragend", event => {
        t.dragend(event);
        x = 0;
        y = 0;
        event.target.style.webkitTransform = event.target.style.transform = null;
      });
  }
}
