import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getExpensesForUser(userId) {
    const httpParams = new HttpParams().set('userId', userId);
    return this.http.get('/expenses/monthlyExpenses', { params: httpParams });
  }

  async loadTipToSession() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const httpParams = new HttpParams().set('userId', String(user.id)).set('birthYear', String(new Date(user.birth_date).getFullYear()));
    const tip = await this.http.get('/tips', { params: httpParams }).toPromise();
    localStorage.setItem('tip', JSON.stringify(tip));
  }
}
