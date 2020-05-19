import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardRegistrationComponent } from './credit-card-registration.component';

describe('CreditCardRegistrationComponent', () => {
  let component: CreditCardRegistrationComponent;
  let fixture: ComponentFixture<CreditCardRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
