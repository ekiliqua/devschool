import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'devschool-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent {

  reactiveLoginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  onSubmit() {
    this.loginService.login(this.reactiveLoginForm.value).pipe(take(1))
      .subscribe((response: boolean) => {
        if (response) {
          this.router.navigate(['/welcome']);
        }
      });
  }

}
