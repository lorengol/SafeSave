import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';

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
  creditForm

  get f() { return this.creditForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  CreditCardToRegister = {} as any;

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group({
      cardNumber: ['', [CreditCardValidators.validateCCNumber]],
      cardExpDate: ['', [CreditCardValidators.validateExpDate]],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      cardHolderName: ['', [Validators.required, Validators.minLength(2)]],
      accountNumber: ['', Validators.required]
    });
  }

  submit() {
    const newCard: creditCard = {
      card_number: this.CreditCardToRegister.card_number.split(' ').join(''),
      card_holder_name: this.CreditCardToRegister.card_holder_name,
      expiration_date: this.CreditCardToRegister.expiration_date,
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      account_number: this.CreditCardToRegister.account_number,
      CVV: this.CreditCardToRegister.CVV
    }
    this.http.post('/credits', newCard, { responseType: 'text' }).subscribe((res) => {
      console.log('success');
    });
  }
}
