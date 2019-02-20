import { Injectable } from "@angular/core";
import { ModalController } from "ionic-angular";

import { DataService } from "../services/data.service";

import { DifficultModalPage } from "../pages/difficult-modal/difficult-modal";
import { modelGroupProvider } from "@angular/forms/src/directives/ng_model_group";

@Injectable()
export class DifficultHandler {
  private _keyStorage: string = "difficult";
  private _default: number = 0;
  private _list: Array<any> = [];

  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  init() {
    this.dataService.get("QuizData.js").then(
      datas => {
        datas.types_options.forEach(option => {
          if (option.code === "niveau") {
            this._list = option.options;
            let index = 0;
            this._list.forEach(item => {
              if (item.code === option.default) {
                this._default = index;
                if (!localStorage.getItem(this._keyStorage))
                  this.set(this.getDefault());
              }
              index++;
            });
          }
        });
      },
      error => {}
    );
  }

  getDefault() {
    return this._list[this._default];
  }

  getList() {
    return this._list;
  }

  /**
   * Retourne les preferences
   */
  get() {
    return localStorage.getItem(this._keyStorage)
      ? JSON.parse(localStorage.getItem(this._keyStorage))
      : this.getDefault();
  }
  /**
   * Sauvegarde les preferences
   * @param collect any
   */
  set(item: any) {
    localStorage.setItem(this._keyStorage, JSON.stringify(item));
    return item;
  }

  showConfigPanel(onChange: any, onCancel?: any) {
    let modal = this.modalController.create(
      DifficultModalPage,
      {
        difficultList: this.getList(),
        currentDifficult: this.get(),
        onChange: difficult => {
          if (this.get() !== difficult) {
            this.set(difficult);
            onChange(difficult);
          }
          modal.dismiss();
        },
        onCancel: () => {
          if (onCancel) onCancel();
          modal.dismiss();
        }
      },
      { cssClass: "is-popup" }
    );
    modal.present();
  }
}
