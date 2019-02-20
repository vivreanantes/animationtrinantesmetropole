import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";

import { TranslateService } from "@ngx-translate/core";

import { DebugService } from "../services/debug.service";
import $ from "jquery";

import { Http } from "@angular/http";

@Injectable()
export class LangageService {
  private pathFile: string = "assets/i18n/";
  private files: Array<string> = [
    "IHMLabels{code_up}Datas.js",
    "DataLabels_{code}.json",
    "translate_{code}.json"
  ];
  private default: string = "fr";
  private codeAllowed: Array<string> = ["fr", "en"];
  constructor(
    private translateService: TranslateService,
    private debugService: DebugService,
    private http: Http
  ) {}

  init() {
    this._loadAllLangFiles(() => {
      this.use(this.get());
    });
  }

  list() {
    return this.codeAllowed;
  }

  get() {
    if (!localStorage.getItem("lang")) {
      let code = this._getValidCode(this.translateService.getBrowserLang());
      this.set(code);
      return code;
    } else {
      return localStorage.getItem("lang");
    }
  }

  set(lang: string) {
    return localStorage.setItem("lang", lang);
  }

  use(code: string) {
    code = this._getValidCode(code);
    this.set(code);
    this.translateService.use(code);
  }

  private _getValidCode(code: string) {
    if (this.codeAllowed.indexOf(code) > -1) {
      return code;
    }
    return this.default;
  }

  private _loadAllLangFiles(callback: any, index?: number) {
    index = !index ? 0 : index;
    this._getLangFiles(this.codeAllowed[index], value => {
      this.translateService.setTranslation(this.codeAllowed[index], value);
      index++;
      if (index === this.codeAllowed.length) {
        callback();
      } else {
        this._loadAllLangFiles(callback, index);
      }
    });
  }

  private _getLangFiles(
    code: string,
    callback: any,
    index?: number,
    langValue?: any
  ) {
    index = !index ? 0 : index;
    langValue = !langValue ? {} : langValue;
    let filename = this.files[index]
      .replace("{code}", code)
      .replace("{code_up}", code.charAt(0).toUpperCase() + code.slice(1));
    this._getLangFile(filename).then(
      value => {
        langValue = $.extend(langValue, value);
        index++;
        if (index === this.files.length) {
          callback(langValue);
        } else {
          this._getLangFiles(code, callback, index, langValue);
        }
      },
      error => {
        index++;
        if (index === this.files.length) {
          callback(langValue);
        } else {
          this._getLangFiles(code, callback, index, langValue);
        }
      }
    );
  }
  private _getLangFile(filename: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.pathFile + filename)
        .toPromise()
        .then(response => {
          this.debugService.time("LangageService:init:" + filename);
          if (response.status === 200) {
            if (filename.indexOf(".json") > -1) {
              resolve(response.json());
            } else {
              let string = response.text();
              string = string.replace(/^(.*)\{/, "{").replace(";", "");
              string = "var dt = function(){return " + string + "}; dt";
              let stringEval = eval(string);
              resolve(stringEval());
            }
          } else {
            reject();
          }
        })
        .catch(error => {
          this.debugService.time("LangageService:init:" + filename);
          reject();
        });
    });
  }
}
