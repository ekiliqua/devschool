import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UnSubscriptionHandler } from '../../utilities/unsubscription.handler';
import { takeUntil } from 'rxjs/operators';

interface MenuEntry {
  id: string;
  path: string;
  action: (path?: string) => void;
}

@Component({
  selector: 'devschool-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends UnSubscriptionHandler implements OnInit {

  menuEntries: MenuEntry[] = [];

  constructor(private loginService: LoginService, private router: Router) {
    super();
    console.log('constructor MainMenuComponent');
    this.loginService.isLogged$()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(isLogged =>
        this.menuEntries = isLogged ? this.getLoggedOptions() : this.getUnloggedOptions()
      );
  }

  ngOnInit() {
    console.log('onInit MainMenuComponent');
  }

  private getUnloggedOptions(): MenuEntry[] {
    return [{
      id: 'login',
      path: '/login',
      action: (path?: string) => this.router.navigate([path])
    }, {
      id: 'reactive-login',
      path: '/reactive-login',
      action: (path?: string) => this.router.navigate([path])
    }];
  }

  private getLoggedOptions(): MenuEntry[] {
    return [{
      id: 'profile',
      path: '/p/dashboard/profile',
      action: (path?: string) => this.router.navigate([path])
    },
    {
      id: 'logout',
      path: '/logout',
      action: (path?: string) => this.loginService.logOut()
    }];
  }
}
