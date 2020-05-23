import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BankAccountRegistrationComponent } from '../bank-account-registration/bank-account-registration.component';
import { CreditCardRegistrationComponent } from '../credit-card-registration/credit-card-registration.component';

@Component({
  selector: 'app-payment-accounts',
  templateUrl: './payment-accounts.component.html',
  styleUrls: ['./payment-accounts.component.css']
})
export class PaymentAccountsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBankAccountModal() {
    this.dialog.open(BankAccountRegistrationComponent, {
      height: '500px',
      width: '500px',
    });
  }

  openCreditCardModal() {
    this.dialog.open(CreditCardRegistrationComponent, {
      height: '500px',
      width: '500px',
    });
  }
}
