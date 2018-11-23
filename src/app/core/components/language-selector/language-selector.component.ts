import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'devschool-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {

  availableLangs: string[];

  constructor(private translateService: TranslateService) {
    this.availableLangs = this.translateService.getLangs();
  }

  onLanguageChange(language: string) {
    this.translateService.use(language);
  }

}
