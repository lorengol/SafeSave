import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dashboard-limitations-panel',
  templateUrl: './dashboard-limitations-panel.component.html',
  styleUrls: ['./dashboard-limitations-panel.component.css']
})
export class DashboardLimitationsPanelComponent implements OnInit {
  limitations

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/limitations', { params: httpParams }).subscribe((res) => {
      this.limitations = res
      this.limitations.forEach(limitation => {
        const httpParams = new HttpParams().set('categoryId', limitation.category_id).set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
        this.http.get('/expenses/expensesByCategory', { params: httpParams }).subscribe((res) => {
          limitation.expensesByCategory = parseInt(res as string);
          limitation.percentageValue = ((limitation.expensesByCategory / limitation.limit) * 100).toFixed(0);
          limitation.percentage = limitation.percentageValue + "%";
          limitation.color = (limitation.percentageValue <= 100) ? '#06c248' : '#FF1919';
        });
      });
    });
  }

}
