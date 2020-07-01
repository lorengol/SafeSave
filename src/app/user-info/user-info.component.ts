import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../registration/registration.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user: User = {} as any;
  onEdit: Boolean;
  fullName: String;

  onClickEdit() {
    this.onEdit = false;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.fullName = this.user.first_Name + ' ' + this.user.last_Name;
    this.onEdit = true;
  }

  submit() {
    if (this.user.income < 0) {
      Swal.fire({
        text: 'Income must be positive',
        icon: 'error',
        confirmButtonColor: 'white',
      });
    } else {
      this.user.first_Name = this.fullName.split(' ')[0];
      this.user.last_Name = this.fullName.split(' ')[1];
      this.http
        .post('/users/update', this.user, { responseType: 'text' })
        .subscribe((data) => {
          Swal.fire({
            text: 'You have successfuly updated your details!',
            icon: 'success',
            confirmButtonColor: 'white',
            timer: 2000,
          });
        });
    }
  }
}
