import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMonthlyPanelComponent } from './statistics-monthly-panel.component';

describe('StatisticsMonthlyPanelComponent', () => {
  let component: StatisticsMonthlyPanelComponent;
  let fixture: ComponentFixture<StatisticsMonthlyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMonthlyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMonthlyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
