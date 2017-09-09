import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  title:string = "Get inspired!";
  quote:any = {
    "author":"Marianne Williamson",
    "content": "Joy is what happens to us when we allow ourselves to recognize how good things really are."
  };

  constructor(){}

  ngOnInit() {
  }

}
