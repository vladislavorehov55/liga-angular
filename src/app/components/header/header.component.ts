import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent  {


  constructor(private authService: AuthService) {}

  get user() {
    // console.log('asss')
    return this.authService.user
  }

  logout() {
    this.authService.logout()
  }

}
