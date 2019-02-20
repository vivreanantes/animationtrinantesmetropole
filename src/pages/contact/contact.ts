import { Component } from "@angular/core";
import { IonicPage, AlertController } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  url: string = "http://mieuxtrieranantes.fr/scripts/mail.php";
  onLoad: boolean = false;
  showHowOther = false;
  form: any = {
    how: null,
    how_other: null,
    think: null,
    think_other: null,
    info: null,
    info_other: null,
    advice: null,
    mail: null
  };

  constructor(
    private http: Http,
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
      .then(response => {
        this.form = {
          how: null,
          think: null,
          info: null,
          advice: null,
          mail: null
        };
        this.showHowOther = false;
        this.translateService
          .get(["contact_success_title", "contact_success_txt", "ok"])
          .subscribe((res: any) => {
            let alert = this.alertController.create({
              title: res["contact_success_title"],
              subTitle: res["contact_success_txt"],
              buttons: [res["ok"]]
            });
            alert.present();
            this.onLoad = false;
          });
      })
      .catch(error => {
        this._error();
      });
  }

  private _error(type?: number) {
    if (type === 1) {
      this.translateService
        .get(["contact_error_title", "contact_error_network", "ok"])
        .subscribe((res: any) => {
          let alert = this.alertController.create({
            title: res["contact_error_title"],
            subTitle: res["contact_error_network"],
            buttons: [res["ok"]]
          });
          alert.present();
        });
    } else {
      this.translateService
        .get(["contact_error_title", "contact_error_field", "ok"])
        .subscribe((res: any) => {
          let alert = this.alertController.create({
            title: res["contact_error_title"],
            subTitle: res["contact_error_field"],
            buttons: [res["ok"]]
          });
          alert.present();
        });
    }
    this.onLoad = false;
  }
}
