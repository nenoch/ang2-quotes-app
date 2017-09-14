import { Component, OnInit, Input } from '@angular/core';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;

  constructor(private quoteService: QuotesService){}

  ngOnInit(){}

  onDelete(){
    console.log(this.quote);
    this.quoteService.deleteQuote(this.quote).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  voteUp(){
    this.quote.votes += 1;
  }

  voteDown(){
    this.quote.votes -= 1;
  }

}
