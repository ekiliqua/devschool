import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { WelcomeComponent } from './core/components/welcome/welcome.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ReactiveLoginComponent } from './core/components/reactive-login/reactive-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reactive-login',
    component: ReactiveLoginComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'p',
    loadChildren: './protected/protected.module#ProtectedModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
