import { NgModule } from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {RouterModule} from "@angular/router";
import {SearchResultsComponent} from "./search-results/search-results.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
      {path: 'searchresults', component: SearchResultsComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
