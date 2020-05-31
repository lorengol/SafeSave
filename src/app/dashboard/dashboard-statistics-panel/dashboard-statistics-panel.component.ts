import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as _ from "lodash";
import Chart from 'chart.js';

@Component({
  selector: 'dashboard-statistics-panel',
  templateUrl: './dashboard-statistics-panel.component.html',
  styleUrls: ['./dashboard-statistics-panel.component.css']
})
export class DashboardStatisticsPanelComponent implements OnInit {

  expenses;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const ctx = (document.getElementById('expensesChart') as HTMLCanvasElement).getContext('2d');

    this.dashboardService.getExpensesForUser(JSON.parse(localStorage.getItem('currentUser')).id)
      .subscribe(data => {
        this.expenses = data;

        this.createChart(ctx);
      });
  }

  private createChart(ctx) {
    const data = {
      datasets: [{
        data: this.expenses.map(expense => expense.expense),
        backgroundColor: ['#083D77', '#F94144', '#e5989b', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590']
      }],
      labels: this.expenses.map(expense => expense.category)
    }

    new Chart(ctx, {
      type: 'doughnut',
      data: data
    });
  }
}
