import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[];

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

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<Item> {
    const item = this.items.find(item => item.id === id);
    return of(item);
  }
}
