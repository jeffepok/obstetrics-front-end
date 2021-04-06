import { Component, OnInit } from '@angular/core';
import {IRegisterUserData} from '../register/IRegisterUserData';
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
        res => console.log(res),
        err => console.log(err.error)
      )
  }
}
