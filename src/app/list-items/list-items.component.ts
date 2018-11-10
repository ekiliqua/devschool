import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../models';


@Component({
  selector: 'devschool-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item[];

  @Input() language: string;

  @Output() selectedItem: EventEmitter<Item> = new EventEmitter();

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'armadura',
        description: 'Es una armadura estupenda',
        price: 20,
        currency: 'EUR',
        available: true,
        img: 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
      },
      {
        id: 2,
        name: 'escudo',
        description: 'Es un escudo magnífico',
        price: 29.6,
        currency: 'EUR',
        available: false,
        img: 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
      },
      {
        id: 3,
        name: 'casco',
        description: 'Es un casco genial',
        price: 15.9991,
        currency: 'USD',
        available: false,
        img: 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
      },
      {
        id: 4,
        name: 'pala',
        description: 'Es una pala estratosférica',
        price: 9.99,
        currency: 'USD',
        available: true,
        img: 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
      },
      {
        id: 5,
        name: 'caballo',
        description: 'Es un caballo muy cariñoso',
        price: 980,
        currency: 'USD',
        available: true,
        img: 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
      }
    ];

  }

  itemSelected(item: Item): void {
    this.selectedItem.emit(item);
  }

  ngOnInit() {
  }
  
}
