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
          formattedQuotes.push(new Quote(
            quote.content,
            quote.author,
            quote._id,
            quote.votes,
            quote.user.username,
            quote.user._id
          ));
        }
        this.quotes = formattedQuotes;
        return formattedQuotes;
      })
      .catch((error:Response) => Observable.throw(error.json()))
  }

  public addQuote(quote:Quote){
    const token = localStorage.getItem('token')
      ? `/?token=${localStorage.getItem('token')}`
      : '';
    const body = JSON.stringify(quote);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(`http://localhost:3000/quote${token}`, body, {'headers':headers})
      .map((response:Response) => {
        const result = response.json();
        const quote = new Quote(
          result.obj.content,
          result.obj.author,
          result.obj._id,
          result.obj.votes,
          result.obj.user.username,
          result.obj.user._id
        );
        this.quotes.push(quote);
        return quote;
      })
      .catch((error:Response)=> {
        return Observable.throw(error.json())}
    );
  }

  public deleteQuote(quote:Quote){
    const token = localStorage.getItem('token')
      ? `/?token=${localStorage.getItem('token')}`
      : '';
    return this.http.delete(`http://localhost:3000/quote/${quote.quoteId}${token}`)
      .map((response:Response) => {
        this.quotes.splice(this.quotes.indexOf(quote),1);
        return response.json();
      })
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
