import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'dashboard-saved-money-panel',
  templateUrl: './dashboard-saved-money-panel.component.html',
  styleUrls: ['./dashboard-saved-money-panel.component.css']
})
export class DashboardSavedMoneyPanelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  totalSavings: number;
  savedInd: boolean = false;
  savedMoney;
  monthlySavingsExists: boolean = false;
  show: boolean = false;
  show2: boolean = false;

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem('currentUser')).id

    const httpParams = new HttpParams().set('userId', userId);
    this.http.get("/savings", { params: httpParams, responseType: 'text' }).subscribe(
      res => {
        let resJson = JSON.parse(res);

        if (+resJson.indMonthExists.indExists == 1) {
          this.monthlySavingsExists = true;
        } else {
          this.monthlySavingsExists = false;
          this.getLastMonthSavings(userId)
        }

        this.totalSavings = +resJson.totalSavings.sum
        this.show = true
      }
    )

  }

  getLastMonthSavings(userId) {
    const httpParams = new HttpParams().set('userId', userId);

    this.http.get("/expenses/getSavings", { params: httpParams, responseType: 'text' }).subscribe(
      savedMoney => {
        this.savedMoney = +savedMoney;

        if (+savedMoney > 0) {
          this.savedInd = true;
        } else {
          this.savedInd = false;
        }

        this.show2 = true;
      },
      err => console.log(err)
    );
  }

  saveMoney() {
    Swal.fire({
      text: 'Are you sure you want to move the money?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Not sure'
    }).then(result => {
      if (result.value) {
        let params = {
          userId: JSON.parse(localStorage.getItem('currentUser')).id,
          amount: this.savedMoney
        }
        this.http.post("/savings", params, { responseType: 'text' }).subscribe(
          data => {
            this.monthlySavingsExists = true;
            this.totalSavings += this.savedMoney;
          },
          err => console.log(err));
      }
    })

  }

}
