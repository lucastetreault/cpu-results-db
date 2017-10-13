import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService implements CanActivate{

  token;

  constructor(private http:Http, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.token) {
      this.router.navigate(['/admin', 'login']);
    }

    return !!this.token;
  }

  login(values){
    let observable = this.http.post('/login.php',values).map(res => res.json()).share();
    observable.subscribe(res => this.token = res );
    return observable;
  }
}
