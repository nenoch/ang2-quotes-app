import { Component } from '@angular/core';
import { Quote } from '../quote/quote.model';

@Component({
  selector: 'app-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css']
})
export class QuotesPageComponent {
  quotes: Quote[];

  constructor(){
    this.quotes = [
      new Quote('Be yourself; everyone else is already taken.', 'Oscar Wilde', 12),
      new Quote("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", 'Bernard M. Baruch', 3),
      new Quote('You only live once, but if you do it right, once is enough.', 'Mae West')
    ]
  }
}
