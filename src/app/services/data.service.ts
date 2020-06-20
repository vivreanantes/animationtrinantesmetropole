import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { DebugService } from "../services/debug.service";

@Injectable()
export class DataService {
  private path: string;
  constructor(private debugService: DebugService, private http: HttpClient) {
    this.path = "assets/data/";
  }

  /**
   * Retourne les données contenu dans un fichier js
   * @param path String
   */
  get(path: string): Promise<any> {
    this.debugService.time("DataService:get:" + path);
    return new Promise((resolve, reject) => {
      let options: any = {
        responseType: "text",
      };
      this.http.get(this.path + path, options).subscribe(
        (response) => {
          this.debugService.time("DataService:get:" + path);
          let string = response.toString(),
            char = string.indexOf("[") > string.indexOf("{") ? "{" : "[",
            regex = char === "{" ? /^(.*)\{/ : /^(.*)\[/;
          string = string.replace(regex, char).replace(";", "");
          string = "var dt = function(){return " + string + "}; dt";
          let stringEval = eval(string);
          let objEval = stringEval();
          resolve(objEval);
        },
        (error) => {
          this.debugService.time("DataService:get:" + path);
          reject(error);
        }
      );
    });
  }

  /**
   * Retourne les données filtrés d'un fichier js
   * @param path
   * @param filter String || Array
   */
  find(path: string, find?: any, filter?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(path)
        .then((datas) => {
          if (find !== undefined) {
            resolve(datas.find(find));
          } else if (filter !== undefined) {
            resolve(datas.filter(filter));
          } else {
            resolve(datas);
          }
        })
        .catch(reject);
    });
  }

  /**
   * Retourne Le tableau de données filtré
   * @param list Array<any> Tableau de data sour le format similaire à QuizData.js
   * @param excludes Array<string>
   */
  filter(list: Array<any>, excludes: Array<string>): Promise<any> {
    return new Promise((resolve) => {
      let newList: any = [],
        index = 0;
      list.forEach((item) => {
        let isValid = true,
          jndex = 0;
        excludes.forEach((exclude) => {
          if (
            item.exclude_filters &&
            item.exclude_filters.indexOf(exclude) > -1
          ) {
            isValid = false;
          }
          jndex++;
          if (jndex === excludes.length) {
            index++;
            if (isValid === true) {
              newList.push(item);
            }
            if (index === list.length) {
              resolve(newList);
            }
          }
        });
      });
    });
  }
}
