import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDebitsComponent } from './credit-card-debits.component';

describe('CreditCardDebitsComponent', () => {
  let component: CreditCardDebitsComponent;
  let fixture: ComponentFixture<CreditCardDebitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardDebitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardDebitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
