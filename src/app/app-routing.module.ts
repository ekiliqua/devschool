import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './item/item.component';
import { AuthGuard } from './services/auth.service';
import { ItemResolver } from './services/item-resolver.service';
import { LoginComponent } from './core/components/login/login.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule',
  
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'list',
    component: ListItemsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    resolve: { item: ItemResolver },
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
