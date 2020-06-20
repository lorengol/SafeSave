import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { pipe } from 'rxjs';
import { Limitation } from 'server/src/entity/Limitation';
import { limitationRoutes } from 'server/limitationsRoutes';

export class limitation {
  id?: number;
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
  category: Category;
  limit: number;
  limitationsToFilter;
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
  updateLimitForm;

  get g() { return this.updateLimitForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog) { }

  openDialog(): void {
    this.limit = undefined;
    this.limitations.forEach(limitation => {
      limitation.inputshow = false;
    });
    const dialogRef = this.dialog.open(LimitationRegistration, {
      width: '270px',
      data: { category: this.category, limit: this.limit, limitationsToFilter: this.limitations }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != null) {
        const newLimitation: limitation = {
          user_id: JSON.parse(localStorage.getItem('currentUser')).id,
          limit: result.limit,
          category_id: result.category.id,
        }
        this.http.post("/limitations", newLimitation, { responseType: 'text' }).subscribe(
          data => {
            newLimitation.category = result.category;
            newLimitation.id = JSON.parse(data).raw.insertId;
            this.limitations.push(newLimitation);
          });
      }
    });
  }

  ngOnInit(): void {
    this.updateLimitForm = this.formBuilder.group({
      limitPrice: ['', [Validators.required, Validators.pattern('^([1-9][0-9]*)$')]]
    })
    const httpParams = new HttpParams().set('userId', JSON.parse(localStorage.getItem('currentUser')).id)
    this.http.get('/limitations', { params: httpParams }).subscribe((limitations) => {
      this.limitations = limitations
    });
  }

  onDelete(deletedlimitation) {
    this.limitations.forEach(limitation => {
      limitation.inputshow = false;
    });
    let index = this.limitations.indexOf(deletedlimitation);
    const httpParams = new HttpParams().set('limitationId', deletedlimitation.id);
    this.http.delete("/limitations/delete", { params: httpParams }).subscribe(
      data => { });
    this.limitations.splice(index, 1);
  }

  onSave(updatedlimitation) {
    if (!this.updateLimitForm.valid) return;
    updatedlimitation.limit = this.limit;
    this.http.post("/limitations/update", updatedlimitation, { responseType: 'text' }).subscribe(
      data => { });
    updatedlimitation.inputshow = false;
  }

  onEdit(editedLimitation) {
    this.limitations.forEach(limitation => {
      limitation.inputshow = false;
    });
    editedLimitation.inputshow = true;
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.limitationForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      limitPrice: ['', [Validators.required, Validators.pattern('^([1-9][0-9]*)$')]]
    })
    this.http.get('/category').subscribe((categories) => {
      this.categories = categories
      this.data.limitationsToFilter.forEach(limitationToFilter => {
        let categoryIndex = this.categories.findIndex((item) => item.id == limitationToFilter.category_id);
        this.categories.splice(categoryIndex, 1);
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
