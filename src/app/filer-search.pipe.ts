import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote/quote.model';

@Pipe({
  name: 'filerSearch',
  pure: false
})
export class FilerSearchPipe implements PipeTransform {

  transform(quotes: Quote[], term:string) {
    if (term === '') {
      return quotes;
    } else {
      return quotes.filter(item =>
        item.content.toLowerCase().includes(term) ||
        item.author.toLowerCase().includes(term)
      );
    }
  }

}
