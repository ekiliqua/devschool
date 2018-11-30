import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { UnSubscriptionHandler } from '../../utilities/unsubscription.handler';

@Component({
  selector: 'devschool-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent extends UnSubscriptionHandler {

  availableLangs: string[];
  currentLanguage: string;

  constructor(private translateService: TranslateService) {
    super();
    this.availableLangs = this.translateService.getLangs();
    this.currentLanguage = this.translateService.currentLang;

    this.translateService.onLangChange
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((event: LangChangeEvent) => this.currentLanguage = event.lang);
  }

  onLanguageChange(language: string) {
    this.translateService.use(language);
  }

}
