import { Pipe, PipeTransform } from '@angular/core';
import { es } from './translate/es';
import { en } from './translate/en';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  translations: Map<string, object>;

  constructor() {

    this.translations = new Map([['es', es], ['en', en]]);
  }

  // {{ 'WELCOME_DEVSCHOOL' | translate: 'es'}}
  transform(key: string, language: string): any {
    if (!language) { return key; }

    const translation = this.translations.get(language);

    if (!translation) { return key; }

    return translation[key];
  }

}
