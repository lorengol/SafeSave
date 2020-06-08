import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTipPanelComponent } from './dashboard-tip-panel.component';

describe('DashboardTipPanelComponent', () => {
  let component: DashboardTipPanelComponent;
  let fixture: ComponentFixture<DashboardTipPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTipPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTipPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
