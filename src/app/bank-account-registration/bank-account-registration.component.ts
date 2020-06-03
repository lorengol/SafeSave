import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankAccountRegistrationService } from './bank-account-registration.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PaymentAccountsComponent } from '../payment-accounts/payment-accounts.component';

export class bankAccount {
  account_number: number;
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
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  get formValidations() { return this.bankAccountRegistrationForm.controls; }

  ngOnInit(): void {
    this.bankAccountRegistrationForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
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
      account_number: this.bankAccountToRegister.account_number,
      branch_number: this.bankAccountToRegister.branch_number,
      bank_id: this.bankAccountToRegister.bank_id,
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      first_Name: this.bankAccountToRegister.first_Name,
      last_Name: this.bankAccountToRegister.last_Name,
      social_security_number: this.bankAccountToRegister.social_security_number
    };

    this.bankAccountService.addBankAccount(newBankAccount).subscribe(
      data => {Swal.fire({
        text: 'Bank account successfuly added!',
        icon: 'success',
        confirmButtonColor: 'white',
        timer: 1500
      });
      this.dialog.closeAll();
    },
      error => console.log('error', error)
    );
  }
}
