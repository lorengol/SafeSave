import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'statistics-expenses-panel',
  templateUrl: './statistics-expenses-panel.component.html',
  styleUrls: ['./statistics-expenses-panel.component.css']
})
export class StatisticsExpensesPanelComponent implements OnInit {

  balance;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const ctx = (document.getElementById('balanceChart') as HTMLCanvasElement).getContext('2d');

    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/expenses/balance', { params: httpParams }).subscribe((res) => {
      this.balance = res;
      this.createChart(ctx);
    }); 
  }

  private createChart(ctx) {
    const data = {
      datasets: [{
        data: [this.balance.map(item => item.income)[0], this.balance.map(item => parseInt(item.monthlyExpenses))[0]], 
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor:["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
        borderWidth: 1
      }],
      labels: ['Income', 'Expenses']
    };

    new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: {
        legend: {
          display: false
        }
      }
    });
  }
}
