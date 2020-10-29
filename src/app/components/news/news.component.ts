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

	newsUrl = "https://raw.githubusercontent.com/vivreanantes/animationtrinantesmetropole/MieuxTrierANantesV3/src/assets/data/News.json"

	updatedAt = undefined;
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
				this.updatedAt = new Date();
				if (response["news"] !== undefined) {
					this.set(response["news"]);
				}
			})
			.catch((error) => {
				console.error(error)
			});
	};

	showNewsDetail = async (aNews) => {
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

	get() {
		if (!localStorage.getItem("news")) {
			this.set([]);
			return [];
		} else {
			var jsonNews = localStorage.getItem("news");
			var news = [];
			if (this.updatedAt === undefined) {
				this.updatedAt = new Date();
			}
			try {
				news = JSON.parse(jsonNews);
			} catch (error) {
				console.error(news);
				this.updatedAt = null;
			}
			return news;
		}
	};

	set(news: Object) {
		return localStorage.setItem("news", JSON.stringify(news));
	};
}