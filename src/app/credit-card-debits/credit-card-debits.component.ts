import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  creditCards;
  displayedColumns: string[] = ['date', 'business', 'expense'];
  dataSource;
  activeSlides: SlidesOutputData;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // get credit cards
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get('/credits', { params: httpParams }).subscribe((res) => {
      console.log(res);
      this.creditCards = res;
    });    

    this.dataSource.paginator = this.paginator;
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
    console.log(this.activeSlides);

    const httpParams = new HttpParams().set('creditCardId', this.activeSlides.slides[0].id.toString());
    this.http.get('/expenses', { params: httpParams }).subscribe((res) => {
      console.log(res);
      this.dataSource = res;
    });     
  }
}
