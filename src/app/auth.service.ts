import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  login(username: string, password: string) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    this.isLoggedIn = true;
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');

    this.isLoggedIn = false;
  }
}

