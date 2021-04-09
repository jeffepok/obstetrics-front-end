import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { HomeComponent } from './layouts/home/home.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { BiodataComponent } from './views/admin/biodata/biodata.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';

// components for views and layouts

import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardNumberInputsComponent } from './components/cards/card-number-inputs/card-number-inputs.component';
import { CardTextInputsComponent } from './components/cards/card-text-inputs/card-text-inputs.component';
import { CardGenericInputsComponent } from './components/cards/card-generic-inputs/card-generic-inputs.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RoutineComponent } from './views/admin/routine/routine.component';
import { CardTwoColumnsComponent } from './components/cards/card-two-columns/card-two-columns.component';
import {AuthService} from './views/auth/auth.service';

// Materials

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardTableComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    HomeComponent,
    AuthComponent,
    BiodataComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ProfileComponent,
    CardNumberInputsComponent,
    CardTextInputsComponent,
    CardGenericInputsComponent,
    RoutineComponent,
    CardTwoColumnsComponent,
  ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

    ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
