import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import {ILoginUserData} from './login/ILoginUserData';
interface User {
  email: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<any>(`${environment.apiUrl}/api/user/verify`, {token: 'verifying'}).subscribe(
        res => {
          observer.next(res.isAuthenticated);
        },
        error => observer.next(false)
      );
    });
  }


  login(userData: ILoginUserData) {
    return this.http.post<any>(`${environment.apiUrl}/api/user/login`, userData)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(userData: ILoginUserData): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/api/user/register`, userData)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
