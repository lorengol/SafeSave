import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../registration/registration.component';
import Swal from 'sweetalert2';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user;
  onEdit = true;
  fullName: String;
  profileForm;
  // inputshow = false;

  get f() { return this.profileForm.controls; }

  onClickEdit() {
    this.onEdit = false;
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      income: ['', [Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      birthDate:['', Validators.required]
    })
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    // this.fullName = this.user.first_Name + ' ' + this.user.last_Name;
    // this.onEdit = true;
  }

  submit() {
    // if (this.user.income < 0) {
    //   Swal.fire({
    //     text: 'Income must be positive',
    //     icon: 'error',
    //     confirmButtonColor: 'white',
    //   });
     if(this.f.birthDate.value > new Date()) {
      Swal.fire({
        text: 'Birthdate cannot be a future date',
        icon: 'warning',
        confirmButtonColor: 'white'
      });
    // } else if (this.f.password.value != this.f.confirmPassword.value) {
    //     Swal.fire({
    //       text: 'Confirmation password does not match password',
    //       icon: 'warning',
    //       confirmButtonColor: 'white'
    //     });
    } else {
      this.http.post('/users/update', this.user, { responseType: 'text' }).subscribe((data) => {
          Swal.fire({
            text: 'You have successfuly updated your details!',
            icon: 'success',
            confirmButtonColor: 'white',
            timer: 2000,
          });
          localStorage.setItem('currentUser', JSON.stringify(this.user));
        });
    }
  }
}
