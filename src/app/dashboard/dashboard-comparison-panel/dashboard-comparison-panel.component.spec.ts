import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComparisonPanelComponent } from './dashboard-comparison-panel.component';

describe('DashboardComparisonPanelComponent', () => {
  let component: DashboardComparisonPanelComponent;
  let fixture: ComponentFixture<DashboardComparisonPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComparisonPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComparisonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
