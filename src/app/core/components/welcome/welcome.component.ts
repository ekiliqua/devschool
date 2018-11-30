import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { takeUntil } from 'rxjs/operators';
import { UnSubscriptionHandler } from '../../utilities/unsubscription.handler';

@Component({
  selector: 'devschool-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends UnSubscriptionHandler {

  constructor(private swapiService: SwapiService) {
    super();
  }

  callHttpService() {
    this.swapiService.getSWPeople()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(personList => console.log(personList));
  }
}
