import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginForm } from '../../models';


@Component({
  selector: 'devschool-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: LoginForm = {} as LoginForm;

  console = console;

  onSubmitTemplateBased() {
      console.log(this.userForm);
  }

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  onLogin(): void {
    this.loginService.login(this.userForm).pipe(take(1))
      .subscribe((response: boolean) => {
        if (response) {
          this.router.navigate(['/welcome']);
        }
      });
  }

}
