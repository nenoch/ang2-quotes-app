import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class QuotesService {
  private quotes: Quote[] = [];

  constructor(private http: Http) {}

  public getQuotes(){
    return this.http.get('http://localhost:3000/quote')
      .map((response:Response) => {
        const quotes = response.json().obj;
        let formattedQuotes: Quote[] = [];
        for (let quote of quotes) {
          formattedQuotes.push(new Quote(quote.content, quote.author, quote.votes));
        }
        this.quotes = formattedQuotes;
        return formattedQuotes;
      })
      .catch((error:Response) => Observable.throw(error.json()))
  }

  public addQuote(quote:Quote){
    const body = JSON.stringify(quote);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/quote', body, {'headers':headers})
      .map((response:Response) => response.json())
      .catch((error:Response)=> Observable.throw(error.json())
    );
  }

}
