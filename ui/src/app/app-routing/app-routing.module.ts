import { NgModule } from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
