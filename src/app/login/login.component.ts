import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;

  constructor(private http: HttpClient) { }

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
        
        // Should move to dashboard after successfully logged in

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
