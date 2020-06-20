import { Pipe, PipeTransform } from "@angular/core";
import { LangageService } from "../services/langage.service";

@Pipe({
  name: "lang",
})
export class LangPipe implements PipeTransform {
  constructor(private langageService: LangageService) {}
  /**
   * Retourne la valeur traduite d'une clef d'un object si la traduction existe
   */
  transform(object: any, key: string) {
    let lang = this.langageService.get();
    if (object && object[key + "_" + lang]) {
      return object[key + "_" + lang];
    } else if (object && object[key]) {
      return object[key];
    } else {
      return "";
    }
  }
}
