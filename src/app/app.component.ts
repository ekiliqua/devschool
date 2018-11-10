import { Component, ViewChild } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'devschool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'devschool';
  language: string = 'es';
  selected: string = 'welcome';

  itemSelected: Item;

  onSelectedItem(item: Item) {
    this.selected = 'item';
    this.itemSelected = item;
  }

}
