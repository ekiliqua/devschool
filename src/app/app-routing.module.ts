import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartComponent } from './cart/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemComponent } from './item/item.component';
import { AuthGuard } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ItemResolver } from './services/item-resolver.service';

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
    path: 'cart',
    component: CartComponent,
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
