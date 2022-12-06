import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/pages/main-page/main-page.component";
import {AuthPageComponent} from "./components/pages/auth-page/auth-page.component";
import {AboutPageComponent} from "./components/pages/about-page/about-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
