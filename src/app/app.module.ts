import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderNavComponent } from './app-header-nav/app-header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuotesPageComponent } from './quotes-page/quotes-page.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { routing } from './app.routes';
import { QuoteComponent } from './quote/quote.component';
import { QuotesService } from './quote/quotes.service';
import { ApiService } from './inspiration/api.service';
import { AuthService } from './auth/auth.service';
import { FilterSearchPipe } from './filter-search.pipe';
import { PopularPipe } from './popular.pipe';
import { QuoteInputComponent } from './quote-input/quote-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderNavComponent,
    MainPageComponent,
    QuotesPageComponent,
    QuoteComponent,
    InspirationComponent,
    FilterSearchPipe,
    PopularPipe,
    AuthenticationComponent,
    QuoteInputComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    QuotesService,
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
