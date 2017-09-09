import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  welcomeMessage: string = "Welcome";
  welcomeContent: string = "Browse through our quotes and vote +1 if you like it, -1 if you don't."
}
