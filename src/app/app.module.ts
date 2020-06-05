import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { BankAccountRegistrationComponent } from './bank-account-registration/bank-account-registration.component';
import { CreditCardRegistrationComponent } from './credit-card-registration/credit-card-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { httpInterceptor } from './http.interceptor';
import { LoginComponent } from './login/login.component';
import { OpenPageComponent } from './open-page/open-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardStatisticsPanelComponent } from './dashboard/dashboard-statistics-panel/dashboard-statistics-panel.component';
import { PaymentAccountsComponent } from './payment-accounts/payment-accounts.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDebitsComponent } from './credit-card-debits/credit-card-debits.component';
import { DashboardIncomePanelComponent } from './dashboard/dashboard-income-panel/dashboard-income-panel.component';
import { DashboardComparisonPanelComponent } from './dashboard/dashboard-comparison-panel/dashboard-comparison-panel.component';
import { DashboardLimitationsPanelComponent } from './dashboard/dashboard-limitations-panel/dashboard-limitations-panel.component';
import { DashboardSavedMoneyPanelComponent } from './dashboard/dashboard-saved-money-panel/dashboard-saved-money-panel.component';
import { DashboardTipPanelComponent } from './dashboard/dashboard-tip-panel/dashboard-tip-panel.component';

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
    path: 'dashboard',
    component: DashboardComponent
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
    DashboardComponent,
    DashboardStatisticsPanelComponent,
    PaymentAccountsComponent,
    CreditCardComponent,
    CreditCardDebitsComponent,
    DashboardIncomePanelComponent,
    DashboardComparisonPanelComponent,
    DashboardLimitationsPanelComponent,
    DashboardSavedMoneyPanelComponent,
    DashboardTipPanelComponent
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
    MatGridListModule,
    CarouselModule,
    MatTableModule,
    MatDialogModule,
    CarouselModule,
    MatPaginatorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
