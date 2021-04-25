import { Component, OnInit } from '@angular/core';
import {IRegisterUserData} from './IRegisterUserData';
import {AuthenticationService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerUserData: IRegisterUserData = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router )  {
    // redirect to home if already logged in
    if (this.auth.currentUserValue) {
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit(): void {}
  registerUser(){
    this.auth.register(this.registerUserData)
      .subscribe(
        res => {
          this.router.navigate(['/profile']);
        },
        err => console.log(err)
      );
  }
}
