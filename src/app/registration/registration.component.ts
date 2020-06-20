import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export class User {
  id: number;
  first_Name: string;
  last_Name: string;
  email: string;
  password: string;
  income: number;
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm;
    
  get f() { return this.registrationForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  UserToRegister: User = {} as any;

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      income: ['', [Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })

    this.UserToRegister = {} as any;
  }

  submit() {
    if (this.f.password.value != this.f.confirmPassword.value) {
      Swal.fire({
        text: 'Confirmation password does not match password',
        icon: 'warning',
        confirmButtonColor: 'white'
      });
    } else {
      this.http.post("/users", this.UserToRegister, { responseType: 'text' }).subscribe(
        data => {
          this.UserToRegister.id = JSON.parse(data).identifiers[0].id;
          localStorage.setItem('currentUser', JSON.stringify(this.UserToRegister));
          Swal.fire({
            text: 'You are successfuly registered!',
            icon: 'success',
            confirmButtonColor: 'white',
            timer: 2000
          });

          this.router.navigate(['/dashboard']);
        },
        err => Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error,
          confirmButtonColor: 'white'
        }));
    }
  }
}
