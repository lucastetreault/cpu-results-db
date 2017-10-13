import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ResultsService} from "./results.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
