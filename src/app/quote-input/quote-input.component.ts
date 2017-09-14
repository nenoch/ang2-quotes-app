import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css']
})
export class QuoteInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(content:string, author:string) {
    console.log(content, author);
  }

}
