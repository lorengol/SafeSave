import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptor } from './http.interceptor';
import { OpenPageComponent } from './open-page/open-page.component';
import { pathToFileURL } from 'url';
import { CreditCardRegistrationComponent } from './credit-card-registration/credit-card-registration.component';
import { BankAccountRegistrationComponent } from './bank-account-registration/bank-account-registration.component';
import { LoginComponent } from './login/login.component';
import { LimitationsComponent, LimitationRegistration } from './limitations/limitations.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'credit',
    component: CreditCardRegistrationComponent
  },
  {
    path: 'bank-account',
    component: BankAccountRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '', 
    component: OpenPageComponent 
  },
  { 
    path: 'limitations', 
    component: LimitationsComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    OpenPageComponent,
    CreditCardRegistrationComponent,
    BankAccountRegistrationComponent,
    LoginComponent,
    LimitationsComponent,
    LimitationRegistration
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    CreditCardDirectivesModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
