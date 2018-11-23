import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../core/models';

@Component({
  selector: 'devschool-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item: Item;

  constructor(
    private cartService: CartService,
    private _activatedRoute: ActivatedRoute) {
      this.item = this._activatedRoute.snapshot.data.item;
  }

  addToCart() {
    this.cartService.addItem(this.item);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

}
