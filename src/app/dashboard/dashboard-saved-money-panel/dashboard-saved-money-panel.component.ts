import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'dashboard-saved-money-panel',
  templateUrl: './dashboard-saved-money-panel.component.html',
  styleUrls: ['./dashboard-saved-money-panel.component.css']
})
export class DashboardSavedMoneyPanelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get("/expenses/getSavings", { params: httpParams }).subscribe(
      data => {
       console.log(data)
      },
      err => console.log(err)
    );
  }

}
