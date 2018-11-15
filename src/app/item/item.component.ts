import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models';

@Component({
  selector: 'devschool-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: Item;

  added = false;

  addToCart() {
    this.added = true;
    console.log('Added: ', this.item);
  }

  removeFromCart() {
    this.added = false;
    console.log('Removed: ', this.item);
  }

}
