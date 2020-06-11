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
    })  
  }

  getUsersCreditCards() {
    const httpParams = new HttpParams().set('user_id', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/credits', { params: httpParams }).subscribe( creditCards => {
      this.creditCards = creditCards;
      
      for(let card of this.creditCards) {
        card.card_number = card.card_number.substring(12);
      }
    })
  }

  openBankAccountModal() {
    const bankAccountsDialog = this.dialog.open(BankAccountRegistrationComponent, {
      width: '500px',
    });

    bankAccountsDialog.afterClosed().subscribe(() => {
     this.getUserBanks();
    });
  }

  deleteBankAccount(id) {
    const httpParams = new HttpParams().set('bankAccountId', id);
    this.http.get('/bank/deleteBankAcount', { params: httpParams }).subscribe( res => {
     this.bankAcoounts = this.bankAcoounts.filter(account => account.account_number != id)
    }, 
    error => console.log(error) 
    );
    
  }

  openCreditCardModal() {
    let creditCardDialog = this.dialog.open(CreditCardRegistrationComponent, {
      height: '500px',
      width: '500px',
    });

    creditCardDialog.afterClosed().subscribe(() => {
      this.getUsersCreditCards();
     });
  }

  deleteCreditCard(id) {
    const httpParams = new HttpParams().set('creditCardId', id);
    this.http.get('/credits/deleteCreditCard', { params: httpParams }).subscribe( res => {
     this.creditCards = this.creditCards.filter(card => card.id != id);
    }, 
    error => console.log(error) 
    );
    
  }
}
