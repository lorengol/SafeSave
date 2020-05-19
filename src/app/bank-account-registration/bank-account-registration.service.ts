import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { bankAccount } from './bank-account-registration.component';

@Injectable({
  providedIn: 'root'
})
export class BankAccountRegistrationService {

  constructor(private http: HttpClient) { }

  getAllBanks() {
    return this.http.get('/bank');
  }

  getBankBranchesByBankId(bankId) {
    const httpParams = new HttpParams().set('bankId', bankId);
    return this.http.get('/bank/bankBranches', { params: httpParams });
  }

  addBankAccount(bankAccount: bankAccount) {
    return this.http.post('/bank', bankAccount, { responseType: 'text' });
  }
}
