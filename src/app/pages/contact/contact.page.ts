import { Component, ViewEncapsulation } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";

import { TranslateService } from "@ngx-translate/core";

import { environment } from "../../../environments/environment";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContactPage {
  url: string = environment.contact_url;
  onLoad: boolean = false;
  showHowOther = false;
  form: any = {
    advice: null,
    mail: null,
  };
  customAlertOptions: any = {
    header: "Pizza Toppings",
    subHeader: "Select your toppings",
    message: "$1.00 per topping",
    translucent: true,
  };

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private translateService: TranslateService
  ) {}

  howChange(event: any) {
    this.translateService
      .get(["contact_how_choice_9"])
      .subscribe((res: any) => {
        if (
          this.form.how &&
          this.form.how.indexOf(res["contact_how_choice_9"]) > -1
        ) {
          this.showHowOther = true;
        } else {
          this.showHowOther = false;
        }
      });
  }

  send() {
    this.onLoad = true;
    this.http
      .post(this.url, this.form)
      .toPromise()
      .then((response) => {
        this.form = {
          advice: null,
          mail: null,
        };
        this.showHowOther = false;
        this.translateService
          .get(["contact_success_title", "contact_success_txt", "ok"])
          .subscribe((res: any) => {            
            this.alerteError(
              res["contact_success_title"],
              res["contact_success_txt"],
              [res["ok"]]
            ).then(() => {
              this.onLoad = false;
            });

          });
      })
      .catch((error) => {
        this._error();
      });
  }

  private _error(type?: number) {
    if (type === 1) {
      this.translateService
        .get(["contact_error_title", "contact_error_network", "ok"])
        .subscribe((res: any) => {
          this.alerteError(
            res["contact_error_title"],
            res["contact_error_network"],
            [res["ok"]]
          );
        });
    } else {
      this.translateService
        .get(["contact_error_title", "contact_error_field", "ok"])
        .subscribe((res: any) => {
          this.alerteError(
            res["contact_error_title"],
            res["contact_error_field"],
            [res["ok"]]
          );
        });
    }
    this.onLoad = false;
  }

  async alerteError(header: string, message: string, buttons: Array<any>) {
    const alert = await this.alertController.create({
      message: header,
      subHeader: message,
      buttons: buttons,
    });
    await alert.present();
  }
}
