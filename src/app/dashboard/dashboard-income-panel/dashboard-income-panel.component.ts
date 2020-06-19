import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { User } from 'server/src/entity/User';

@Component({
  selector: 'dashboard-income-panel',
  templateUrl: './dashboard-income-panel.component.html',
  styleUrls: ['./dashboard-income-panel.component.css'],
})
export class DashboardIncomePanelComponent implements OnInit {
  user;
  income;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id)
    this.http.get('/users/userById', { params: httpParams }).subscribe((user) => {
      this.user = user;
      this.income = this.user.income;
    });
  }

}
