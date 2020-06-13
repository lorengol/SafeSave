import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.email = "";
    this.password = "";
    this.form = new FormGroup({
      email: new FormControl(this.email, Validators.email),
      password: new FormControl()
    });
  }

  signIn() {
    const httpParams = new HttpParams().set('email', this.email).set('password', this.password);
    this.http.get("/users/verifyUserLogin", { params: httpParams }).subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify(data));

        this.router.navigate(['/dashboard']);
      },
      err => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error,
        confirmButtonColor: 'white'
      })
    );
  }

}
