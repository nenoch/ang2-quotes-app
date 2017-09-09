import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private apiUrl:string = 'https://talaikis.com/api/quotes/random/';

  constructor(private http:Http) {}

  public getRandomQuote(){
    return this.http.get(this.apiUrl)
    .map((response:Response) => response.json())
    .catch((error:Response) => this.handleError(error));
  }

  private handleError(error:any) {
    let errorMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }
}
