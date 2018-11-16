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
    const langs = ['es', 'en'];
    this.translateService.addLangs(langs);
    if (['es', 'en'].includes(this.translateService.getBrowserLang())) {
      this.translateService.setDefaultLang(this.translateService.getBrowserLang());      
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

  onSelectedItem(item: Item) {
    this.selected = 'item';
    this.itemSelected = item;
  }

}
