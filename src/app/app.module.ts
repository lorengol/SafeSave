import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule } from '@angular/forms';
import { CreditCardDirectivesModule } from 'angular-cc-library';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptor } from './http.interceptor';
import { CreditCardRegistrationComponent } from './credit-card-registration/credit-card-registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  }, 
  {
    path: 'credit',
    component: CreditCardRegistrationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CreditCardRegistrationComponent
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
    CreditCardDirectivesModule,
    ReactiveFormsModule
    ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
