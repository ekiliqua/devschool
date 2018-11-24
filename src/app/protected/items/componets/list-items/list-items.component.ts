import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models';
import { ItemsService } from 'src/app/core/services/items.service';


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
