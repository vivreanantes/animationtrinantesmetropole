import { Pipe, PipeTransform } from "@angular/core";

import { LangageService } from "../../services/langage.service";

/**
 * Generated class for the LangPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "lang"
})
export class LangPipe implements PipeTransform {
  constructor(private langageService: LangageService) {}
  /**
   * Retourne la valeur traduite d'une clef d'un object si la traduction existe
   */
  transform(object: any, key: string) {
    let lang = this.langageService.get();
    if (object[key + "_" + lang]) {
      return object[key + "_" + lang];
    } else if (object[key]) {
      return object[key];
    } else {
      return "";
    }
  }
}
