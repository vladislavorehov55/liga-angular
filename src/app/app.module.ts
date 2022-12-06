import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageModule} from "./components/pages/main-page/main-page.module";
import {AuthPageModule} from "./components/pages/auth-page/auth-page.module";
import {AboutPageModule} from "./components/pages/about-page/about-page.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {HeaderModule} from "./components/header/header.module";
import {ENVIRONMENT} from "./services/environment/environment.service";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    AuthPageModule,
    AboutPageModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
    {
      provide: ENVIRONMENT, useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
