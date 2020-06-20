import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";

import { environment } from "../../environments/environment";

@Injectable()
export class DebugService {
  private isDevice: boolean;
  private timeList: Array<string> = [];

  constructor(private platform: Platform) {
    this.isDevice = platform.is("cordova");
  }

  log(...args: any[]) {
    if (environment.production === false) {
      console.log(...args);
    }
  }

  time(key: string) {
    for (let i in this.timeList) {
      if (this.timeList[i] === key) {
        console.timeEnd(key);
        this.timeList.splice(+i, 1);
        return false;
      }
    }
    console.time(key);
    this.timeList.push(key);
  }

  wait(ms: number) {
    let start = new Date().getTime(),
      end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
