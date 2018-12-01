import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'devschool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    const langs = this.getAvailableLangs();
    this.translateService.addLangs(langs);
    this.setDefaultLang();
  }

  ngOnInit() {
    console.log('onInit AppComponent');
  }

  private getAvailableLangs(): string[] {
    return ['es', 'en'];
  }

  private setDefaultLang() {
    if (['es', 'en'].includes(this.translateService.getBrowserLang())) {
      this.translateService.setDefaultLang(this.translateService.getBrowserLang());
      this.translateService.currentLang = this.translateService.getBrowserLang();
    } else {
      this.translateService.setDefaultLang('en');
      this.translateService.currentLang = 'en';
    }
  }

}
