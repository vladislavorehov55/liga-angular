import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecordItemModule} from "./components/record-item/record-item.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecordItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
