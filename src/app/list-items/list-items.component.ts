import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devschool-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: any[];

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'armadura',
        price: 20,
        currency: 'EUR',
        available: true,
      },
      {
        id: 2,
        name: 'escudo',
        price: 29.6,
        currency: 'EUR',
        available: false,
      },
      {
        id: 3,
        name: 'casco',
        price: 15.9991,
        currency: 'USD',
        available: false,
      },
      {
        id: 4,
        name: 'pala',
        price: 9.99,
        currency: 'USD',
        available: true,
      },
      {
        id: 5,
        name: 'caballo',
        price: 980,
        currency: 'USD',
        available: true,
      }
    ];
  }

  ngOnInit() {
  }

}
