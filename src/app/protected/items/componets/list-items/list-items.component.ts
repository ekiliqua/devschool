import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';
import { Item } from 'src/app/core/models';
import { UnSubscriptionHandler } from 'src/app/core/utilities/unsubscription.handler';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'devschool-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent extends UnSubscriptionHandler {

  totalItems: number;
  filterActive: boolean;
  items: Item[];

  @Output() selectedItem: EventEmitter<Item> = new EventEmitter();

  constructor(
    private itemsService: ItemsService,
    private changeDetectorRef: ChangeDetectorRef
    ) {
    super();
    this.itemsService.getAll()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(items => {
        this.items = items;
        this.totalItems = items.length;
        // this.lastIndex = items[items.length].id;
        this.changeDetectorRef.markForCheck();
      });
  }

  public modifyItem(item: Item): void {
    const modifiedItem = Object.assign({}, item);
    modifiedItem.name += 'modified';
    this.itemsService.modifyItem(modifiedItem)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(item => {
        const element = this.items.find(element => element.id === item.id);
        Object.assign(element, item);
      });
  }

  public deleteItem(id: number): void {
    this.itemsService.deleteItem(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(item => {
        const elementIndex = this.items.findIndex(element => element.id === id);
        this.items.splice(elementIndex);
      });
  }

  public addNewItem(): void {
    this.totalItems++;
    this.itemsService.saveItem(this.totalItems)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(item => {
        this.items.push(item);
      });
  }
}
