import { limitation } from './../../limitations/limitations.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dashboard-limitations-panel',
  templateUrl: './dashboard-limitations-panel.component.html',
  styleUrls: ['./dashboard-limitations-panel.component.css']
})
export class DashboardLimitationsPanelComponent implements OnInit {
  limitations: any;
  options = { autoHide: false, scrollbarMinSize: 100 };

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.prepareData();
  }

  private async prepareData() {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.limitations = await this.http.get('/limitations', { params: httpParams }).toPromise();

    await this.limitations.forEach(limitation => {
      const httpParams = new HttpParams().set('categoryId', limitation.category_id).set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
      this.http.get('/expenses/expensesByCategory', { params: httpParams }).subscribe((res) => {
        limitation.expenses = res;
        limitation.expensesByCategory = ((limitation.expenses.map(expense => expense.expense)).length == 0) ? 0 : parseInt(limitation.expenses.map(expense => expense.expense) as string);
        limitation.percentageValue = ((limitation.expensesByCategory / limitation.limit) * 100).toFixed(0);
        limitation.percentage = limitation.percentageValue + "%";
        limitation.color = (limitation.percentageValue <= 100) ? '#06c248' : '#FF1919';
        this.sortLimitations();
      });
    });
  }

  private sortLimitations() {
    this.limitations.sort((a, b) => {
      return (+b.percentageValue) - (+a.percentageValue);
    });
  }
}
