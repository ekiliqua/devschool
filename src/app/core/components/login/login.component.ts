import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'devschool-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginService.login(this.password).pipe(take(1))
      .subscribe((response: boolean) => {
        if (response) {
          this.router.navigate(['/welcome']);
        }
      });
  }

}
