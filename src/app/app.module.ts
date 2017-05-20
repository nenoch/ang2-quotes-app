import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderNavComponent } from './app-header-nav/app-header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuotesPageComponent } from './quotes-page/quotes-page.component';
import { routing } from './app.routes';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderNavComponent,
    MainPageComponent,
    QuotesPageComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
