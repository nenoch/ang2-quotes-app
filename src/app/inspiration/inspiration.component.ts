import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  private title:string = "Get inspired!";
  private quote:any = {
    "quote":"loading quote...",
    "author":"loading author..."
  };

  constructor(private apiService:ApiService){}

  ngOnInit() {
    this.getQuote();
  }

  private getQuote(){
    this.apiService.getRandomQuote().
    subscribe(
      data => { this.quote = data },
      error => console.log(error)
    );
  }

  private onNext(){
    this.getQuote();
  }
}
