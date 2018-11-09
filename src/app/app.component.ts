import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'devschool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'devschool';
  language: string;
  selected: string;
}
