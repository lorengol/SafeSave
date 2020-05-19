import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankAccountRegistrationService } from './bank-account-registration.service';

export class bankAccount {
  account_number?: number;
  branch_number: number;
  bank_id: number;
  user_id: number;
  current?: number;
  first_Name: string;
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

  banks;
  bankBranches;
  bankAccountToRegister: bankAccount = {} as any;
  bankAccountRegistrationForm: any;

  constructor(private bankAccountService: BankAccountRegistrationService,
    private formBuilder: FormBuilder) { }

  get formValidations() { return this.bankAccountRegistrationForm.controls; }

  ngOnInit(): void {
    this.bankAccountRegistrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      bankId: ['', Validators.required],
      branchNumber: ['', Validators.required],
      socialSecurityNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
    });

    this.bankAccountService.getAllBanks().subscribe(banks => this.banks = banks);
  }

  onBankSelect(event) {
    this.bankAccountService.getBankBranchesByBankId(event.value).subscribe(branches => this.bankBranches = branches);
  }

  submit() {
    const newBankAccount: bankAccount = {
      branch_number: this.bankAccountToRegister.branch_number,
      bank_id: this.bankAccountToRegister.bank_id,
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      first_Name: this.bankAccountToRegister.first_Name,
      last_Name: this.bankAccountToRegister.last_Name,
      social_security_number: this.bankAccountToRegister.social_security_number
    };

    this.bankAccountService.addBankAccount(newBankAccount).subscribe(
      data => console.log('success'),
      error => console.log('error', error)
    );
  }
}
