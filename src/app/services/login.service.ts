import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged: boolean;

  constructor() {
    this.isLogged = false
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  login(password: string): Observable<boolean> {
    this.isLogged = password === '1234';
    return of(this.isLogged);
  }
}
