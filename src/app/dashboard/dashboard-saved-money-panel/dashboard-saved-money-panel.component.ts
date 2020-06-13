import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'dashboard-saved-money-panel',
  templateUrl: './dashboard-saved-money-panel.component.html',
  styleUrls: ['./dashboard-saved-money-panel.component.css']
})
export class DashboardSavedMoneyPanelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  savedInd:boolean;
  savedMoney;

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id);
    this.http.get("/expenses/getSavings", { params: httpParams , responseType : 'text' }).subscribe(
      savedMoney => {
        this.savedMoney = savedMoney;

       if(+savedMoney > 0) {
        this.savedInd = true;
       } else {
        this.savedInd = false; 
       }
      },
      err => console.log(err)
    );
  }

}
