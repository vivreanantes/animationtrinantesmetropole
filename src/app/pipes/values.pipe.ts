import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "values",
})
export class ValuesPipe implements PipeTransform {
  transform(value: string, ...args) {
    return Object.values(value);
  }
}
