import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { BankAccountRegistrationComponent } from './bank-account-registration/bank-account-registration.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreditCardRegistrationComponent } from './credit-card-registration/credit-card-registration.component';
import { DashboardComparisonPanelComponent } from './dashboard/dashboard-comparison-panel/dashboard-comparison-panel.component';
import { DashboardIncomePanelComponent } from './dashboard/dashboard-income-panel/dashboard-income-panel.component';
import { DashboardLimitationsPanelComponent } from './dashboard/dashboard-limitations-panel/dashboard-limitations-panel.component';
import { DashboardSavedMoneyPanelComponent } from './dashboard/dashboard-saved-money-panel/dashboard-saved-money-panel.component';
import { DashboardStatisticsPanelComponent } from './dashboard/dashboard-statistics-panel/dashboard-statistics-panel.component';
import { DashboardTipPanelComponent } from './dashboard/dashboard-tip-panel/dashboard-tip-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { httpInterceptor } from './http.interceptor';
import { OpenPageComponent } from './open-page/open-page.component';
import { PaymentAccountsComponent } from './payment-accounts/payment-accounts.component';
import { ProgressBarColorDirective } from './progress-bar-color.directive';
import { RegistrationComponent } from './registration/registration.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsMonthlyPanelComponent } from './statistics/statistics-monthly-panel/statistics-monthly-panel.component';
import { StatisticsBusinessPanelComponent } from './statistics/statistics-business-panel/statistics-business-panel.component';
import { StatisticsExpensesPanelComponent } from './statistics/statistics-expenses-panel/statistics-expenses-panel.component';

import { LoginComponent } from './login/login.component';
import { LimitationsComponent, LimitationRegistration } from './limitations/limitations.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  },
  {
    path: 'limitations', 
    component: LimitationsComponent 
  }, {
    path: 'statistics',
    component: StatisticsComponent
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
    LimitationRegistration,
    CreditCardComponent,
    CreditCardDebitsComponent,
    DashboardComponent,
    DashboardStatisticsPanelComponent,
    PaymentAccountsComponent,
    CreditCardComponent,
    CreditCardDebitsComponent,
    UserInfoComponent,
    DashboardIncomePanelComponent,
    DashboardComparisonPanelComponent,
    DashboardLimitationsPanelComponent,
    DashboardSavedMoneyPanelComponent,
    DashboardTipPanelComponent,
    LimitationsComponent,
    LimitationRegistration,
    ProgressBarColorDirective,
    LimitationsComponent,
    LimitationRegistration,
    StatisticsComponent,
    StatisticsMonthlyPanelComponent,
    StatisticsBusinessPanelComponent,
    StatisticsExpensesPanelComponent
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
    MatIconModule,
    CarouselModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    SimplebarAngularModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatListModule,
    SimplebarAngularModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
