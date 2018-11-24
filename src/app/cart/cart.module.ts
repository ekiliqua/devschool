import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';
import { CartComponent } from '../protected/items/componets/item/components/cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    CoreModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
