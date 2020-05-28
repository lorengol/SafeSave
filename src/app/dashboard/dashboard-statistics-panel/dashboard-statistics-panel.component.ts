import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'dashboard-statistics-panel',
  templateUrl: './dashboard-statistics-panel.component.html',
  styleUrls: ['./dashboard-statistics-panel.component.css']
})
export class DashboardStatisticsPanelComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getExpensesForUser(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(data => console.log(data));
  }

}
