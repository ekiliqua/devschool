import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'devschool-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private swapiService: SwapiService) {

  }

  callHttpService() {
    this.swapiService.getSWPeople()
    .subscribe(personList => console.log(personList));
  }
}
