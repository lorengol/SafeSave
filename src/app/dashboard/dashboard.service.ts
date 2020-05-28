import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getExpensesForUser(userId) {
    const httpParams = new HttpParams().set('userId', userId);
    return this.http.get('/expenses/userExpenses', { params: httpParams });
  }
}
