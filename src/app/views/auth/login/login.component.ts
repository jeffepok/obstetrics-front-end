import { Component, OnInit } from '@angular/core';
import {ILoginUserData} from './ILoginUserData';
import {AuthenticationService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginUserData: ILoginUserData = {
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    this.authenticationService.isLoggedIn().subscribe(
      isLoggedIn => {
        if (isLoggedIn){
          this.router.navigate(['/profile']);
        }
      },
        error =>{
          console.log("no logged in");

        }
      );
  }

  ngOnInit(): void {}
  loginUser(): void{
    this.authenticationService.login(this.loginUserData)
      .subscribe(
        res => {
          this.router.navigate(['/profile']);
        },
        err => console.log(err.error)
      );
  }
}
