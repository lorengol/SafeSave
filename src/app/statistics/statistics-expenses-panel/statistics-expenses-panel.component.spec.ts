import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsExpensesPanelComponent } from './statistics-expenses-panel.component';

describe('StatisticsExpensesPanelComponent', () => {
  let component: StatisticsExpensesPanelComponent;
  let fixture: ComponentFixture<StatisticsExpensesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsExpensesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsExpensesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
