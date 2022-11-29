import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecordsListModule} from "./components/records-list/records-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecordsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
