import { creditCard } from './../credit-card-registration/credit-card-registration.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Expense } from 'server/src/entity/Expense';

export interface PeriodicElement {
  date: string;
  business: string;
  expense: number;
}

@Component({
  selector: 'app-credit-card-debits',
  templateUrl: './credit-card-debits.component.html',
  styleUrls: ['./credit-card-debits.component.css']
})
export class CreditCardDebitsComponent implements OnInit {

  monthList = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
  currentMonth;

  creditCards;
  displayedColumns: string[] = ['date', 'business', 'expense'];
  dataSource;
  activeSlides: SlidesOutputData;
  isCreditCardListEmpty;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // get credit cards
    const httpParams = new HttpParams().set('user_id', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/credits', { params: httpParams }).subscribe((res) => {
      this.creditCards = res;
      this.isCreditCardListEmpty = Object.keys(res).length == 0;
    });    
  }

  customOptions: OwlOptions  = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
    nav: true
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;

    const httpParams = new HttpParams().set('creditCardId', this.activeSlides.slides[0].id.toString());
    this.http.get('/expenses', { params: httpParams }).subscribe((res) => {
      (res as any).map(item => item.date = new Date(item.date));
      this.dataSource = new MatTableDataSource(res as any);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter: number) => {
        console.log(data.date + " " + filter)
        return data.date.getMonth() == filter;
      };
    });
  }

  onMonthSelect(event) {
    console.log(this.dataSource)
    this.dataSource.filter = event.value;
    console.log(this.dataSource)
  }

} 