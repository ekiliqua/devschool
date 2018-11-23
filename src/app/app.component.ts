import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'devschool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected: string = 'welcome';

  constructor(private translateService: TranslateService) {
    const langs = this.getAvailableLangs();
    this.translateService.addLangs(langs);
    this.setDefaultLang();
  }  

  private getAvailableLangs(): string[] {
    return ['es', 'en'];
  }

  private setDefaultLang() {
    if (['es', 'en'].includes(this.translateService.getBrowserLang())) {
      this.translateService.setDefaultLang(this.translateService.getBrowserLang());      
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

}
