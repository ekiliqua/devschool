import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginForm } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged: boolean;
  private _isLogged$: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    if (!!+localStorage.getItem('isLogged')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this._isLogged$ = new BehaviorSubject(this.isLogged);
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  isLogged$(): Observable<boolean> {
    return this._isLogged$.asObservable();
  }

  login(loginForm: LoginForm): Observable<boolean> {
    this.isLogged = loginForm.user === 'user' && loginForm.password === '1234';

    if (this.isLogged) {
      this.persistSession(this.isLogged);
    }

    this._isLogged$.next(this.isLogged);
    return of(this.isLogged);
  }

  persistSession(value: boolean) {
    // This values are not correct. Only for DEMO.
    localStorage.setItem('isLogged', `${value ? 1 : 0}`);
    sessionStorage.setItem('isLogged', `${value ? 1 : 0}`);
  }

  logOut(): void {
    this.isLogged = false;
    this.persistSession(this.isLogged);
    this._isLogged$.next(this.isLogged);
    this.router.navigate(['/login']);
  }
}
