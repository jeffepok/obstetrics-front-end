import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/views/auth/auth.service';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
})
export class AdminNavbarComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/landing'])
  }
}
