import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ListItemsComponent } from './componets/list-items/list-items.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemComponent } from './componets/item/item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    CoreModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent
  ]
})
export class ItemsModule { }