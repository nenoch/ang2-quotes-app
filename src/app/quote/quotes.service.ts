import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class QuotesService {
  private quotes: Quote[] = [];

  constructor(private http: Http) {}

  getQuotes(){
    return this.http.get('http://localhost:3000/quote')
      .map(response => {
        const quotes = response.json().obj;
        let formattedQuotes: Quote[] = [];
        for (let quote of quotes) {
          formattedQuotes.push(new Quote(quote.content, quote.author, quote.votes));
        }
        this.quotes = formattedQuotes;
        return formattedQuotes;
      })
      .catch(error => Observable.throw(error.json()))
  }

}
