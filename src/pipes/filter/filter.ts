import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(
    items: any,
    key: string,
    term: string,
    minTermLength?: number,
    maxLength?: number
  ) {
    if (
      term &&
      ((minTermLength && term.length >= minTermLength) || !minTermLength)
    ) {
      term = term.toLowerCase();
      let results = items.filter(item => {
        if (item && item[key]) return item[key].search(term) !== -1;
        else return false;
      });
      if (maxLength) {
        return results.slice(0, maxLength);
      } else {
        return results;
      }
    } else {
      return [];
    }
  }
}
