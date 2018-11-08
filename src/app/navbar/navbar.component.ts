import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'devschool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() languageChange: EventEmitter<string>;

  constructor() {
    this.languageChange = new EventEmitter();
   }

  ngOnInit() {
  }

  onlanguageChange(language: string) {
    console.log(`He recibido el idioma flipantemente: ${language}`)
    this.languageChange.emit(language);
  }

}
