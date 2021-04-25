import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../views/auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.isLoggedIn().subscribe(
      isLoggedIn => {
        if (!isLoggedIn){
        this.router.navigate(['landing/login']);
      }
    }
    );
  }
}
