import { Component, ViewEncapsulation } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";

import { TranslateService } from "@ngx-translate/core";

import { environment } from "../../../environments/environment";
import { NgForm } from '@angular/forms';
import { exit } from "process";


@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"]
})
export class ContactPage {
  url: string = environment.contact_url;
  onLoad: boolean = false;
  aForm = null;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private translateService: TranslateService
  ) { 

  }

  send(contactForm: NgForm) {
    // this.onLoad = true;
    this.aForm = contactForm;

    this.http
      .post(this.url, contactForm.value)
      // On crée une Promesse
      .toPromise()
      // Promesse : création de la "callback" de succès avec then
      .then((response) => {

        this.translateService
          .get(["contact_success_title", "contact_success_txt", "ok"])
          .subscribe((res: any) => {
            this.openPopup(
              res["contact_success_title"],
              res["contact_success_txt"],
              [
                {
                  text: res["ok"],
                  handler: () => {
                    this.aForm.resetForm();
                  },
                }
              ]
            );
            // .then(() => {
            //  this.onLoad = false;
            // });

          });
      })
      // Promesse : création de la "callback" d'erreur avec error
      .catch((error) => {
        this._error();
      });
  }

  private _error(type?: number) {
    if (type === 1) {
      this.translateService
        .get(["contact_error_title", "contact_error_network", "ok"])
        .subscribe((res: any) => {
          this.openPopup(
            res["contact_error_title"],
            res["contact_error_network"],
            [res["ok"]]
          );
        });
    } else {
      this.translateService
        .get(["contact_error_title", "contact_error_field", "ok"])
        .subscribe((res: any) => {
          this.openPopup(
            res["contact_error_title"],
            res["contact_error_field"],
            [res["ok"]]
          );
        });
    }
    // this.onLoad = false;
  }

  async openPopup(header: string, message: string, buttons: Array<any>) {
    const alert = await this.alertController.create({
      message: header,
      subHeader: message,
      buttons: buttons,
    });
    await alert.present();
  }
}
