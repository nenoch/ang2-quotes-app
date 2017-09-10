import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular',
  pure: false
})
export class PopularPipe implements PipeTransform {

  transform(array: any[]) {
    let transformed = array;
    transformed.sort((a,b) => b.votes - a.votes);
    console.log(transformed);
    return transformed;
  }

}
