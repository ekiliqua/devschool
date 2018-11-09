import { Component, OnInit, EventEmitter, AfterViewChecked, Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'devschool-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Utils

  // variables privadas
  private _selected: string

  // variables publicas
  public links: string[];

  // inputs

  // outputs

  @Output() languageChange: EventEmitter<string> = new EventEmitter();;

  @Input() selected;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();;

  constructor() {
    this.links = ['welcome', 'list'];
    this._selected = this.links[0];
   }

   ngOnInit() {
   }

  public onlanguageChange(language: string): void {
    console.log(`He recibido el idioma flipantemente: ${language}`)
    this.languageChange.emit(language);
  }

  public select(link: string): void {
    this._selected = link;
    this.selectedChange.emit(link);
  }

}
