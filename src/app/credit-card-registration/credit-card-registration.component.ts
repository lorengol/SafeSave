import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

export class creditCard {
  card_number: number;
  card_holder_name: string
  expiration_date: string;
  user_id: number;
  account_number: number;
  CVV: number;
}

@Component({
  selector: 'app-credit-card-registration',
  templateUrl: './credit-card-registration.component.html',
  styleUrls: ['./credit-card-registration.component.css']
})
export class CreditCardRegistrationComponent implements OnInit {
  creditForm;
  userBankAccounts;

  get f() { return this.creditForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog) { }

  CreditCardToRegister = {} as any;

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group({
      cardNumber: ['', [CreditCardValidators.validateCCNumber]],
      cardExpDate: ['', [CreditCardValidators.validateExpDate]],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      cardHolderName: ['', [Validators.required, Validators.minLength(2)]],
      accountNumber: ['', Validators.required]
    });

    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/bank/UserBankAcounts', { params: httpParams }).subscribe((res) => {
      this.userBankAccounts = res;
    }); 
  }

  submit() {

    const httpParams = new HttpParams().set('cardNumber', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/credits/card', { params: httpParams }).subscribe((res) => {
      console.log(res);
    }); 

    // const newCard: creditCard = {
    //   card_number: this.CreditCardToRegister.card_number.split(' ').join(''),
    //   card_holder_name: this.CreditCardToRegister.card_holder_name,
    //   expiration_date: this.CreditCardToRegister.expiration_date,
    //   user_id: JSON.parse(localStorage.getItem('currentUser')).id,
    //   account_number: this.CreditCardToRegister.account_number,
    //   CVV: this.CreditCardToRegister.CVV
    // }
    // this.http.post('/credits', newCard, { responseType: 'text' }).subscribe((res) => {
    //   Swal.fire({
    //     text: 'Card successfuly added!',
    //     icon: 'success',
    //     confirmButtonColor: 'white',
    //     timer: 1500
    //   });
    //   this.dialog.closeAll();
    // });
  }
}
