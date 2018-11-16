import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'devschool-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: Item;

  added = false;

  constructor(private cartService: CartService) {
  }

  addToCart() {
    this.cartService.addItem(this.item);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

}
