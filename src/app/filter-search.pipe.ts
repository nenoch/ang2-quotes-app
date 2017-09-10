import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  pure: false
})
export class FilterSearchPipe implements PipeTransform {

  transform(array: any[], term:string) {
    if (term === null) {
      return array;
    } else {
      return array.filter(item =>
        item.content.toLowerCase().includes(term.toLowerCase()) ||
        item.author.toLowerCase().includes(term.toLowerCase())
      );
    }
  }

}
