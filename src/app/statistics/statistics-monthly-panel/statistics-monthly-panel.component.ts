import { Chart } from 'chart.js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statistics-monthly-panel',
  templateUrl: './statistics-monthly-panel.component.html',
  styleUrls: ['./statistics-monthly-panel.component.css']
})
export class StatisticsMonthlyPanelComponent implements OnInit {

  expenses;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const ctx = (document.getElementById('totalMonthlyExpensesChart') as HTMLCanvasElement).getContext('2d');

    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/expenses/expnesesByMonths', { params: httpParams }).subscribe((res) => {
      this.expenses = res;
      this.createChart(ctx);
    }); 
  }

  private createChart(ctx) {
    const data = {
      datasets: [{
        data: this.expenses.map(expense => expense.expense),
        backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
        borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
        borderWidth: 1
      }],
      labels: this.expenses.map(expense => expense.month)
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        legend: {
          display: false
        }
      }
    });
  }
}
