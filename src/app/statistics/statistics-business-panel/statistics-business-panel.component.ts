import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statistics-business-panel',
  templateUrl: './statistics-business-panel.component.html',
  styleUrls: ['./statistics-business-panel.component.css']
})
export class StatisticsBusinessPanelComponent implements OnInit {

  expenses;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/expenses/topExpensesPerBusiness', { params: httpParams }).subscribe((res) => {
      this.expenses = res;
      console.log(res);
    }); 
  }

}
