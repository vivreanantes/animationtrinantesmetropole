import { AlertController } from '@ionic/angular';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LangageService } from "../../services/langage.service";

@Component({
	selector: "news",
	templateUrl: "./news.component.html",
	styleUrls: ["./news.component.scss"],
})
export class NewsComponent {
	constructor(
		private langageService: LangageService,
		private http: HttpClient,
		public alertController: AlertController) {}

	newsUrl = "https://raw.githubusercontent.com/vivreanantes/animationtrinantesmetropole/MieuxTrierANantesV3_News/src/assets/data/News.json"

	news = [];
	updatedAt = null;
	lastCheck = null;
	showBlock = false;
	loading = false;

	toggleShowBlock = () => {
		this.showBlock = !this.showBlock;

		if (this.showBlock) {
			this.refresh(null);
		}
	};

	refresh = (evt) => {
		if (evt) {
			evt.stopPropagation();
		}
		if (!this.showBlock) {
			return;
		}

		this.loading = true;
		this.http
			.get(this.newsUrl)
			.toPromise()
			.then((response) => {
				this.loading = false;
				this.lastCheck = new Date();
				if (response["news"] !== undefined) {
					this.news = response["news"];
					if (response["updated_at"] !== undefined) {
						var date = response["updated_at"];
						try {
							// Multiplied by 1000 so that the argument is in milliseconds, not seconds.
							this.updatedAt = new Date(date * 1000)
							console.error(this.updatedAt)
						} catch (error) {
							console.error(error)
							this.updatedAt = new Date();
						}
					} else {
						console.error("No updated_at field in json")
						this.updatedAt = new Date();
					}
				}
			})
			.catch((error) => {
				console.error(error)
			});
	};

	showNewsDetail = async (aNews) => {
		console.log(aNews);
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: aNews.title,
			message: aNews.description,
			buttons: [{
				text: 'Ok',
				handler: () => {}
			}]
		});
		alert.present();
	};
}