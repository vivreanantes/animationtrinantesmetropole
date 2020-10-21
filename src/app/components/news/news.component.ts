import { AlertController } from '@ionic/angular';
import { Component } from "@angular/core";

@Component({
	selector: "news",
	templateUrl: "./news.component.html",
	styleUrls: ["./news.component.scss"],
})
export class NewsComponent {
	constructor(public alertController: AlertController) {}

	news = [];
	showBlock = false;

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
		this.news = [{
			icon: "👍",
			title: "Nouvelle version de l'application en cours de développement",
			description: "Une nouvelle application est en cours de développement par l'équipe Mieux Trier à Nantes.\nAttendez vous à plein de nouveautés 😉"
		}, {
			icon: "😲",
			title: "Regardez les nouveautés via ce lien",
			description: "Les nouveautés sont listées ici : <a href='https://mieuxtrieranantes.fr' target='_blank'>https://mieuxtrieranantes.fr</a>"
		}, {
			icon: "😢",
			title: "Le titre est vraiment trop long et doit être coupé afin qu'il ne prenne pas trop de place sur l'écran d'un téléphone qui serait trop petit pour tout afficher.",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}];
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