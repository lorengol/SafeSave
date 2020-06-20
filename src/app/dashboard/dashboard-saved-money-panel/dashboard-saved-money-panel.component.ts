import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';

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

  saveMoney() {
    Swal.fire({
      text: 'Are you sure you want to move the money?',
      icon: 'question',
      showCancelButton:true,
      confirmButtonText:'yes',
      cancelButtonText:'not sure',
      confirmButtonColor: 'white',
      cancelButtonColor: 'white'
    }).then((result) => {
      if (result.value) {       
        let params = {
          userId: JSON.parse(localStorage.getItem('currentUser')).id,
          amount: this.savedMoney
        } 
        this.http.post("/savings", params, { responseType: 'text' }).subscribe(
          data => console.log("success"),
          err => console.log(err));
      }
    })

  }

}
