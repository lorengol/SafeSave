import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLimitationsPanelComponent } from './dashboard-limitations-panel.component';

describe('DashboardLimitationsPanelComponent', () => {
  let component: DashboardLimitationsPanelComponent;
  let fixture: ComponentFixture<DashboardLimitationsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLimitationsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLimitationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
