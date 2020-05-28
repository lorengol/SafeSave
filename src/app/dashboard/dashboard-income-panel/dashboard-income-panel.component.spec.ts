import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIncomePanelComponent } from './dashboard-income-panel.component';

describe('DashboardIncomePanelComponent', () => {
  let component: DashboardIncomePanelComponent;
  let fixture: ComponentFixture<DashboardIncomePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIncomePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIncomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
