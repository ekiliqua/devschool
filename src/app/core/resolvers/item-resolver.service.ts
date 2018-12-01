import { Injectable } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {
  constructor(private itemsService: ItemsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    return this.itemsService.getItem(+route.params.id);
  }
}
