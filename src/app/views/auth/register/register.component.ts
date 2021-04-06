import { Component, OnInit } from '@angular/core';
import {IRegisterUserData} from './IRegisterUserData';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerUserData:IRegisterUserData = {
    email: '',
    password: ''
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
