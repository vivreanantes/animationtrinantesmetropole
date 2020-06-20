import { Component, Input, OnChanges, SimpleChange } from "@angular/core";

@Component({
  selector: "stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.scss"],
})
export class StarsComponent implements OnChanges {
  @Input("score")
  score: number = 0;
  @Input("nb-stars")
  nbStars: number = 4;
  items: Array<any> = [];

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.items = [];
    for (let index = 0; index < this.nbStars; index++) {
      this.items.push({
        isFull: index < this.score ? true : false,
      });
    }
  }
}
