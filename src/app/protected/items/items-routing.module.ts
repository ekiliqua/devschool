import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './componets/list-items/list-items.component';
import { ItemComponent } from './componets/item/item.component';
import { ItemResolver } from 'src/app/core/services/item-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListItemsComponent
  },
  {
    path: 'item/:id',
    resolve: { item: ItemResolver },
    component: ItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
