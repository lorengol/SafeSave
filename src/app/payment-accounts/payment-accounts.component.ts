import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BankAccountRegistrationComponent, bankAccount } from '../bank-account-registration/bank-account-registration.component';
import { CreditCardRegistrationComponent } from '../credit-card-registration/credit-card-registration.component';

@Component({
  selector: 'app-payment-accounts',
  templateUrl: './payment-accounts.component.html',
  styleUrls: ['./payment-accounts.component.css']
})
export class PaymentAccountsComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  bankAcoounts: any = [];

  creditCards: any = [];

  ngOnInit(): void {
    this.getUserBanks()
    this.getUsersCreditCards()
  }

  getUserBanks() {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/bank/UserBankAcounts', { params: httpParams }).subscribe( bankAccounts => {
      this.bankAcoounts = bankAccounts;
      console.log(this.bankAcoounts)
    })
  }

  getUsersCreditCards() {

  }

  openBankAccountModal() {
    this.dialog.open(BankAccountRegistrationComponent, {
      width: '500px',
    });
  }

  deleteCredidCard() {
    
  }

  openCreditCardModal() {
    this.dialog.open(CreditCardRegistrationComponent, {
      height: '500px',
      width: '500px',
    });
  }
}
