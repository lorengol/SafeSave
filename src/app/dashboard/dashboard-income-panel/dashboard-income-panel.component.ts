import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'dashboard-income-panel',
  templateUrl: './dashboard-income-panel.component.html',
  styleUrls: ['./dashboard-income-panel.component.css'],
})
export class DashboardIncomePanelComponent implements OnInit {
  income;

  ngOnInit(): void {
    this.income = JSON.parse(localStorage.getItem('currentUser')).income;
  }

}
