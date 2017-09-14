import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { QuotesService } from '../quote/quotes.service';
import { Quote } from '../quote/quote.model';


@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css']
})
export class QuoteInputComponent implements OnInit {
// template-driven form
  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const quote = new Quote(form.value.content, form.value.author);
    console.log("quote object input", quote);
    this.quoteService.addQuote(quote).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    form.resetForm();
  }

}
