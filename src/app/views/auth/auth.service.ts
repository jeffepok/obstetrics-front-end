import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegisterUserData} from './register/IRegisterUserData';
import {ILoginUserData} from './login/ILoginUserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/user/register';
  private _loginUrl = 'http://localhost:3000/api/user/login';
  constructor(private http: HttpClient) { }

  registerUser(user:IRegisterUserData){
    return this.http.post<IRegisterUserData>(this._registerUrl, user)
  }
  loginUser(user:ILoginUserData){
    return this.http.post<ILoginUserData>(this._loginUrl, user);
  }
}
