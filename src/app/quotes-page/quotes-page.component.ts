import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css']
})
export class QuotesPageComponent {
  quote = {
    'content': 'Be yourself; everyone else is already taken.',
    'author': 'Oscar Wilde',
    'votes': 12}

  voteUp(){
    this.quote.votes += 1;
  }

  voteDown(){
    this.quote.votes -= 1;
  }
}
