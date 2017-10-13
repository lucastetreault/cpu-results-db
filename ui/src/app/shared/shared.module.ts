import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
