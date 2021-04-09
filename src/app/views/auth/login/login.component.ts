import { Component, OnInit } from '@angular/core';
import {ILoginUserData} from './ILoginUserData';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginUserData:ILoginUserData = {
    email: '',
    password: ''
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => console.log(res.token),
        err => console.log(err.error)
      )
  }
}
