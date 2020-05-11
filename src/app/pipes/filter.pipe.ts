import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
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
      let results = items.filter((item) => {
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
