import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

export class limitation {
  user_id: number;
  category_id: number;
  limit: number;
  category?: Category;
}

export class Category {
  id: number;
  name: string;
}

export interface DialogData {
  category_id: number;
  category: Category;
  limit: number;
}

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.css']
})
export class LimitationsComponent implements OnInit {
  limitations;
  category_id: number;
  category: Category;
  limit: number;
  limitationToPush: limitation;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LimitationRegistration, {
      width: '270px',
      data: { category: this.category, limit: this.limit }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != null) {
        const newLimitation:limitation = {
        user_id: JSON.parse(localStorage.getItem('currentUser')).id,
        limit: result.limit,
        category_id: result.category.id,
      }
      this.http.post("/limitations", newLimitation, { responseType: 'text' }).subscribe(
        data => {});
        newLimitation.category = result.category;
        this.limitations.push(newLimitation);
      }
    });
  }

  ngOnInit(): void {
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id)
    this.http.get('/limitations',{ params: httpParams }).subscribe((res) => {
      this.limitations = res
      console.log(res);
    });
  }

  onRemove(){

  }

  onEdit(){

  }

}

@Component({
  selector: 'limitation-registration',
  templateUrl: './limitation-registration.html',
  styleUrls: ['./limitations.component.css']
})
export class LimitationRegistration implements OnInit {
  categories;
  limitationForm;

  get f() { return this.limitationForm.controls; }

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    public dialogRef: MatDialogRef<LimitationRegistration>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
      this.limitationForm = this.formBuilder.group({
        categoryName: ['', Validators.required],
        limitPrice: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]]
      })
      this.http.get('/category').subscribe((res) => {
        this.categories = res
        console.log(res);
      });
      console.log(this.f);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
