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
    this.isLogged = false
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
    this._isLogged$.next(this.isLogged);
    return of(this.isLogged);
  }

  logOut(): void {
    this.isLogged = false;
    this._isLogged$.next(this.isLogged);
    this.router.navigate(['/login']);
  }
}
