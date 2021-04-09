import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegisterUserData} from './register/IRegisterUserData';
import {ILoginUserData} from './login/ILoginUserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = '/api/user/register';
  private _loginUrl = '/api/user/login';
  constructor(private http: HttpClient) { }

  registerUser(user:IRegisterUserData){
    return this.http.post<IRegisterUserData>(this._registerUrl, user)
  }
  loginUser(user:ILoginUserData){
    return this.http.post<any>(this._loginUrl, user);
  }
}
