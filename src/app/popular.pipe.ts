import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular',
  pure: false
})
export class PopularPipe implements PipeTransform {

  transform(array: any[], checked:boolean) {
    if (checked) {
      let transformed = array;
      transformed.sort((a,b) => b.votes - a.votes);
      return transformed;
    } else {
      return array;
    }
  }

}
