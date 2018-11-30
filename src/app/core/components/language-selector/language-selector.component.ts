import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'devschool-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {

  availableLangs: string[];
  currentLanguage: string;

  constructor(private translateService: TranslateService) {
    this.availableLangs = this.translateService.getLangs();
    this.currentLanguage = this.translateService.currentLang;
    
    this.translateService.onLangChange
    .subscribe((event: LangChangeEvent) => this.currentLanguage = event.lang);
  }

  onLanguageChange(language: string) {
    this.translateService.use(language);
  }

}
