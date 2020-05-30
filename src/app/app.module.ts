import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component } from '@angular/core';
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptor } from './http.interceptor';
import { OpenPageComponent } from './open-page/open-page.component';
import { pathToFileURL } from 'url';
import { CreditCardRegistrationComponent } from './credit-card-registration/credit-card-registration.component';
import { BankAccountRegistrationComponent } from './bank-account-registration/bank-account-registration.component';
import { LoginComponent } from './login/login.component';
import { PaymentAccountsComponent } from './payment-accounts/payment-accounts.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDebitsComponent } from './credit-card-debits/credit-card-debits.component';

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
    path: 'debits',
    component: CreditCardDebitsComponent
  },
  {
    path: 'Accounts',
    component: PaymentAccountsComponent
  },
  { 
    path: '', 
    component: OpenPageComponent 
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
    PaymentAccountsComponent,
    CreditCardComponent,
    CreditCardDebitsComponent
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
    MatTableModule,
    MatDialogModule,
    CarouselModule,
    MatPaginatorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
