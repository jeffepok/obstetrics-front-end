import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { HomeComponent } from './layouts/home/home.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { BiodataComponent } from './views/admin/biodata/biodata.component';
import { TablesComponent } from './views/admin/tables/tables.component';
import {RoutineComponent} from './views/admin/routine/routine.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views

import { LandingComponent } from './views/landing/landing.component';


const routes: Routes = [
  // profile views
  {
    path: 'profile',
    component: HomeComponent,
    children: [
      { path: 'biodata', component: BiodataComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'routine', component: RoutineComponent},
      { path: '', redirectTo: 'biodata', pathMatch: 'full' },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // no layout views


  {
    path: 'landing',
    component: LandingComponent,
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
