import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ResultsService} from "./results.service";
import {AdminModule} from "./admin/admin.module";
import { SearchResultsComponent } from './search-results/search-results.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    AdminModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
