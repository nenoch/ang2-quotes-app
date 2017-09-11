import { Routes, RouterModule } from '@angular/router';
import { QuotesPageComponent } from './quotes-page/quotes-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: MainPageComponent},
  {path: 'quotes', component: QuotesPageComponent},
  {path: 'inspiration', component: InspirationComponent},
  {path: 'authentication', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
