import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/login', component: LoginComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AuthService]}
    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
