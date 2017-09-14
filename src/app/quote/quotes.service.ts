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
          formattedQuotes.push(new Quote(quote.content, quote.author, quote._id, quote.votes));
        }
        this.quotes = formattedQuotes;
        return formattedQuotes;
      })
      .catch((error:Response) => Observable.throw(error.json()))
  }

  public addQuote(quote:Quote){
    this.quotes.push(quote);
    const body = JSON.stringify(quote);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/quote', body, {'headers':headers})
      .map((response:Response) => response.json())
      .catch((error:Response)=> Observable.throw(error.json())
    );
  }

  public deleteQuote(quote:Quote){
    this.quotes.splice(this.quotes.indexOf(quote),1);
    return this.http.delete(`http://localhost:3000/quote/${quote.quoteId}`)
      .map((response:Response) => response.json())
      .catch((error:Response)=> Observable.throw(error.json())
    );
  }

  public updateVotes(quote:Quote){
    const body = JSON.stringify(quote);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.patch(`http://localhost:3000/quote/${quote.quoteId}`, body, {'headers':headers})
      .map((response:Response) => response.json())
      .catch((error:Response)=> Observable.throw(error.json())
    );
  }

}
