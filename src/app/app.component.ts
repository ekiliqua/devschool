import { Component, ViewChild } from '@angular/core';
import { Item } from './models';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang(this.translateService.getBrowserLang());;
  }

  onSelectedItem(item: Item) {
    this.selected = 'item';
    this.itemSelected = item;
  }

}
