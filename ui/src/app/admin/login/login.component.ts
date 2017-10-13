import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  error;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit({value}){
    this.authService.login(value).subscribe( res => res ? this.router.navigate(['/admin']) : this.error = true);
  }

}
