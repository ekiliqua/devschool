import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'devschool-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

@Input() language: string;

@Output() languageChange: EventEmitter<string>;

  constructor() {
    this.languageChange = new EventEmitter();
  }

  ngOnInit() {
  }

  onLanguageChanged(language: string) {
    console.log(`Componente flipante cambiando el idioma a: ${language}`);
    this.languageChange.emit(language);
  }

}
