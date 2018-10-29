import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'devschool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() languageChanged: EventEmitter<string>;

  constructor() {
    this.languageChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  languageChange(language: string) {
    console.log(`He recibido el idioma flipantemente: ${language}`)
  }
}
