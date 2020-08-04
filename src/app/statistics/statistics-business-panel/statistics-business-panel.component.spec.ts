import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBusinessPanelComponent } from './statistics-business-panel.component';

describe('StatisticsBusinessPanelComponent', () => {
  let component: StatisticsBusinessPanelComponent;
  let fixture: ComponentFixture<StatisticsBusinessPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsBusinessPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBusinessPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
