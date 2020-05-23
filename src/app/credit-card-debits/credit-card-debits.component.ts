import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-credit-card-debits',
  templateUrl: './credit-card-debits.component.html',
  styleUrls: ['./credit-card-debits.component.css']
})
export class CreditCardDebitsComponent implements OnInit {
  
  creditCards;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/credits', { params: httpParams }).subscribe((res) => {
      console.log('res');
    });
  }

}
