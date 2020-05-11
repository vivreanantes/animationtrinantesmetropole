import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: "osm-horaire",
  templateUrl: "./osm-horaire.component.html",
  styleUrls: ["./osm-horaire.component.scss"],
})
export class OsmHoraireComponent implements OnChanges {
  @Input("horaires") horaires: any;
  horaireString: Array<string> = [];

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.horaires) {
      this.horaires.split(";").map((item) => {
        this.horaireString.push(this.getReadableHours(item));
      });
    }
  }

  /**
   * Transform OpenStreetMap hours into french readable hours
   **/
  getReadableHours(opening_hours) {
    return opening_hours
      .replace("Jan", "Janvier")
      .replace("Feb", "Février")
      .replace("Mar", "Mars")
      .replace("Apr", "Avril")
      .replace("May", "Mai")
      .replace("Jun", "Juin")
      .replace("Jul", "Juillet")
      .replace("Aug", "Août")
      .replace("Sep", "Septembre")
      .replace("Oct", "Octobre")
      .replace("Nov", "Novembre")
      .replace("Dec", "Décembre")
      .replace("Mo[1]", "Le 1er lundi du mois")
      .replace("Tu[1]", "Le 1er mardi du mois")
      .replace("We[1]", "Le 1er mercredi du mois")
      .replace("Th[1]", "Le 1er jeudi du mois")
      .replace("Fr[1]", "Le 1er vendredi du mois")
      .replace("Sa[1]", "Le 1er samedi du mois")
      .replace("Su[1]", "Le 1er dimanche du mois")
      .replace("Mo[2]", "Le 2ème lundi du mois")
      .replace("Tu[2]", "Le 2ème mardi du mois")
      .replace("We[2]", "Le 2ème mercredi du mois")
      .replace("Th[2]", "Le 2ème jeudi du mois")
      .replace("Fr[2]", "Le 2ème vendredi du mois")
      .replace("Sa[2]", "Le 2ème samedi du mois")
      .replace("Su[2]", "Le 2ème dimanche du mois")
      .replace("Mo[3]", "Le 3ème lundi du mois")
      .replace("Tu[3]", "Le 3ème mardi du mois")
      .replace("We[3]", "Le 3ème mercredi du mois")
      .replace("Th[3]", "Le 3ème jeudi du mois")
      .replace("Fr[3]", "Le 3ème vendredi du mois")
      .replace("Sa[3]", "Le 3ème samedi du mois")
      .replace("Su[3]", "Le 3ème dimanche du mois")
      .replace("Mo[4]", "Le 4ème lundi du mois")
      .replace("Tu[4]", "Le 4ème mardi du mois")
      .replace("We[4]", "Le 4ème mercredi du mois")
      .replace("Th[4]", "Le 4ème jeudi du mois")
      .replace("Fr[4]", "Le 4ème vendredi du mois")
      .replace("Sa[4]", "Le 4ème samedi du mois")
      .replace("Su[4]", "Le 4ème dimanche du mois")
      .replace("Mo[-1]", "Le dernier lundi du mois")
      .replace("Tu[-1]", "Le dernier mardi du mois")
      .replace("We[-1]", "Le dernier mercredi du mois")
      .replace("Th[-1]", "Le dernier jeudi du mois")
      .replace("Fr[-1]", "Le dernier vendredi du mois")
      .replace("Sa[-1]", "Le dernier samedi du mois")
      .replace("Su[-1]", "Le dernier dimanche du mois")
      .replace("Mo", "Lundi")
      .replace("Tu", "Mardi")
      .replace("We", "Mercredi")
      .replace("Th", "Jeudi")
      .replace("Fr", "Vendredi")
      .replace("Sa", "Samedi")
      .replace("Su", "Dimanche")
      .replace(/off/gi, "fermé")
      .replace(/,/g, " & ")
      .replace(/;/g, ", ");
  }
}
