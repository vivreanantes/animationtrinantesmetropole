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

	// newsUrl = "https://raw.githubusercontent.com/vivreanantes/animationtrinantesmetropole/MieuxTrierANantesV3/src/assets/data/News.json"
	// Les actualités sont un flux JSON qui est présent sur Pipedream
	// Exemple : [ {
    //        "icon": "🤔",
    //        "title": "Un article sur l'avenir des emballages triés (extension de tri généralisée sur tout Nantes Métropole en janvier 2021)",
    //        "description": "L'usine Arc-en-Ciel, située à Couëron, réceptionne et trie les déchets recyclables des agglos nantaise et nazairienne\n <a href='https://www.20minutes.fr/nantes/2957575-20210121-nantes-tous-emballages-desormais-poubelle-jaune-deviennent' target='_blank'>Petit article de 20 minutes</a>."
    //    } ]
	newsUrl = "https://enuf01zaj0t1xyc.m.pipedream.net/"

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