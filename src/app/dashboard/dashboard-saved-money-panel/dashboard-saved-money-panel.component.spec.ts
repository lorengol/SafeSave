import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSavedMoneyPanelComponent } from './dashboard-saved-money-panel.component';

describe('DashboardSavedMoneyPanelComponent', () => {
  let component: DashboardSavedMoneyPanelComponent;
  let fixture: ComponentFixture<DashboardSavedMoneyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSavedMoneyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSavedMoneyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
