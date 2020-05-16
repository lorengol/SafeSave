import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  CreditCardToRegister:creditCard = {} as any;

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group({
      cardNumber: ['', [CreditCardValidators.validateCCNumber]],
      cardExpDate: ['', [CreditCardValidators.validateExpDate]],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      cardHolderName:['', [Validators.required, Validators.minLength(2)]],
      accountNumber:['', Validators.required]
    })
  }

  submit() {
    console.log(this.f)
    this.CreditCardToRegister.card_number = this.f.cardNumber.value.split(' ').join('');
    this.http.post("/credits", this.CreditCardToRegister, {responseType: 'text'}).subscribe((res)=> {
      console.log("success");
    });
  }
}
