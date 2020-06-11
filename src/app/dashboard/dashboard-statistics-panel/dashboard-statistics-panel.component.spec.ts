import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatisticsPanelComponent } from './dashboard-statistics-panel.component';

describe('DashboardStatisticsPanelComponent', () => {
  let component: DashboardStatisticsPanelComponent;
  let fixture: ComponentFixture<DashboardStatisticsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStatisticsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatisticsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
