import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: '/authentication', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);
