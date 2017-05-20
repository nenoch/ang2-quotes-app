import { Routes, RouterModule } from '@angular/router';
import { QuotesPageComponent } from './quotes-page/quotes-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: MainPageComponent},
  {path: 'quotes', component: QuotesPageComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
