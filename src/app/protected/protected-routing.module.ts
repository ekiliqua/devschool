import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'dashboard',
    loadChildren: './user-dashboard/user-dashboard.module#UserDashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
