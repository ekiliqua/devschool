import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginForm } from '../../models';
import { UnSubscriptionHandler } from '../../utilities/unsubscription.handler';


@Component({
  selector: 'devschool-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: LoginForm = {} as LoginForm;

  console = console;

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  onLogin(): void {
    this.loginService.login(this.loginForm).pipe(take(1))
      .subscribe((response: boolean) => {
        if (response) {
          this.router.navigate(['/welcome']);
        }
      });
  }

}
