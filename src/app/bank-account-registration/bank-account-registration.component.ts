import { getAll } from './../../../server/DAL/user-dal';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

export class bankAccount {
  account_number:number;
  branch_number:string;
  bank_id:string;
  user_id:string;
  first_Name:string;   
  last_Name: string;
  social_security_number: string;
}

export class bank {
  id: number;
  name: string;
}

@Component({
  selector: 'app-bank-account-registration',
  templateUrl: './bank-account-registration.component.html',
  styleUrls: ['./bank-account-registration.component.css']
})
export class BankAccountRegistrationComponent implements OnInit {

  banks: any;
  bankAccountRegistrationForm: any;

  get f() { return this.bankAccountRegistrationForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }  

  BankAccountToRegister: bankAccount = {} as any;

  ngOnInit(): void {
    this.bankAccountRegistrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      bankId: ['', [Validators.required, Validators.email]],
      branchNumber: ['', [Validators.required, Validators.minLength(6)]],
      accountNumber: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required, Validators.minLength(9), Validators.maxLength(9)]
    })

    this.http.get("/bank").subscribe((banks) => {
      this.banks = banks
    });
    
  }

  submit(){
    // if(this.f.password.value != this.f.confirmPassword.value) {
    //   alert("אישור סיסמא לא תואם לסיסמא שהקלדת")
    // } else {
    //   this.http.post("/users", this.BankAccountToRegister, {responseType: 'text'}).subscribe((res)=> {
    //     console.log("success");
    //   });
    // }
  }
}
