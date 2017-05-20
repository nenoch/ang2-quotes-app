import { Component, OnInit } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote = new Quote('Be yourself; everyone else is already taken.', 'Oscar Wilde', 12);

  ngOnInit(){}

  voteUp(){
    this.quote.votes += 1;
  }

  voteDown(){
    this.quote.votes -= 1;
  }

}
