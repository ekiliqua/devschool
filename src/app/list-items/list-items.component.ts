import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../models';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'devschool-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  items$: Observable<Item[]>;

  @Output() selectedItem: EventEmitter<Item> = new EventEmitter();

  constructor(private itemsService: ItemsService) {
    this.items$ = this.itemsService.getItems();
  }
  
}
