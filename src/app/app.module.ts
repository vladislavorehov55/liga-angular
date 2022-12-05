import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageModule} from "./components/page/page.module";
import {AuthPageModule} from "./components/pages/auth-page/auth-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    AuthPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
