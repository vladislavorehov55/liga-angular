import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  email: string = ''
  password: string = ''

  constructor(private _authService: AuthService, private router: Router) { }

  get authService() {
    return this._authService
  }

  loginHandler() {
    this.authService.login(this.email, this.password).subscribe((token) => {
      if (token) {
        this.router.navigate([''])
      }
    })
  }



}
