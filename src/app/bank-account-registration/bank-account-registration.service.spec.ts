import { TestBed } from '@angular/core/testing';

import { BankAccountRegistrationService } from './bank-account-registration.service';

describe('BankAccountRegistrationService', () => {
  let service: BankAccountRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccountRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
