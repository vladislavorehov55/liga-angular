import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {IUser} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://api.fit-meetups.ru'

  constructor(private http: HttpClient, private routes: Router) {
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, {email, password})
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('meetups_app_auth_token', res.token)
          }
          return null
        })
      )

  }

  logout() {
    localStorage.removeItem('meetups_app_auth_token')
    this.routes.navigate(['auth'])
  }
  parseJwt(token: string): IUser {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
  public get user(): IUser | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      return this.parseJwt(token);
    } else return null;
  }
  get token(): string | null {
    return localStorage.getItem('meetups_app_auth_token')
  }

}
