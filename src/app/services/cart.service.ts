import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ItemComponent } from '../item/item.component';
import { CartItem, Item } from '../core/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[];
  private _cartItems$: BehaviorSubject<CartItem[]>;

  constructor() {
    this.cartItems = [];
    this._cartItems$ = new BehaviorSubject(this.cartItems);
  }

  getItems(): Observable<CartItem[]> {
    return this._cartItems$.asObservable();
  }

  addItem(item: Item, quantity: number = 1): void {
    const cartItem: CartItem = {...item, quantity};
    if (this.cartItems.reduce((acc, curr) => [...acc, curr.id], []).includes(item.id)) {
      this.cartItems.find(cartItem => cartItem.id === item.id).quantity++;
    } else {
      this.cartItems.push(cartItem);
    }
    this._cartItems$.next(this.cartItems);
    console.log('cartItems', this.cartItems);
  }

  removeItem(id: number): void {
    const foundItem = this.cartItems.find(cartItem => cartItem.id === id);
    if (!!foundItem) {
      if (foundItem.quantity > 1) {
        foundItem.quantity--
      } else {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id);
      }
    }
    this._cartItems$.next(this.cartItems);
    console.log('cartItems', this.cartItems);
  }
}
