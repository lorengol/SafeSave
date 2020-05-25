import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class limitation {
  id: number;
  user_Id: number;
  category_Id: number;
  limit: number;
}

export class Category{
  id: number;
  name: string;
}

export interface DialogData {
  limitation: limitation;
}

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.css']
})
export class LimitationsComponent implements OnInit {
  limitations;
  limitation: limitation = new limitation;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LimitationRegistration, {
      width: '250px',
      data: {id: this.limitation.id, limit: this.limitation.limit}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.limitations.push(result);
    });
  }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id)
    this.http.get('/limitations',{ params: httpParams }).subscribe((res) => {
      this.limitations = res
      console.log(res);
    });
  }

}

@Component({
  selector: 'limitation-registration',
  templateUrl: './limitation-registration.html',
})
export class LimitationRegistration implements OnInit {
  categories;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<LimitationRegistration>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
      this.http.get('/category').subscribe((res) => {
        this.categories = res
        console.log(res);
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // onCategorySelect(event) {
  //   this.bankAccountService.getBankBranchesByBankId(event.value).subscribe(branches => this.bankBranches = branches);
  // }

}
