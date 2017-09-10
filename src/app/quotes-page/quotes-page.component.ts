import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote/quote.model';
import { QuotesService } from '../quote/quotes.service';

@Component({
  selector: 'app-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css']
})
export class QuotesPageComponent implements OnInit {
  private quotes: Quote[] = [];
  private term:string = '';

  constructor(private quotesService: QuotesService){}

  ngOnInit(){
    this.quotesService.getQuotes()
    .subscribe(
      (quotes: Quote[]) => { this.quotes = quotes }
    );
  }

  search(value:string) {
    this.term = value;
  }
}
