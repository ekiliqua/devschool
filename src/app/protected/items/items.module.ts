import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ListItemsComponent } from './componets/list-items/list-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemComponent } from './componets/item/item.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent
  ]
})
export class ItemsModule { }
