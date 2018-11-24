import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

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
export class MainMenuComponent {

  menuEntries: MenuEntry[] = [];

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.isLogged$().subscribe(isLogged =>
      this.menuEntries = isLogged ? this.getLoggedOptions() : this.getUnloggedOptions()
    );
  }

  private getUnloggedOptions(): MenuEntry[] {
    return [{
      id: 'login',
      path: '/login',
      action: (path?: string) => this.router.navigate([path])
    }];
  }

  private getLoggedOptions(): MenuEntry[] {
    return [{
      id: 'profile',
      path: '/profile',
      action: (path?: string) => this.router.navigate([path])
    },
    {
      id: 'logout',
      path: '/logout',
      action: (path?: string) => this.loginService.logOut()
    }];
  }
}
