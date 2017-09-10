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
  private check:boolean = false;
  private clicked:boolean = false;

  constructor(private quotesService: QuotesService){}

  ngOnInit(){
    this.quotesService.getQuotes()
    .subscribe(
      (quotes: Quote[]) => { this.quotes = quotes }
    );
  }

  private search(value:string) {
    this.term = value;
  }

  private reorder(){
    this.check = !this.check;
  }

  private changeStyle(){
    this.clicked = !this.clicked;
  }
}
