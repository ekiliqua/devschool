import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from '../item/components/cart.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    CoreModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
