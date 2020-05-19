import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  form;
  email:string;
  password:string;

  ngOnInit(): void {
    this.email = "";
    this.password = "";
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
   });
  }

  signIn() {
    const httpParams = new HttpParams().set('email', this.email).set('password', this.password);
    this.http.get("/users/getUserByEmail", {params: httpParams}).subscribe((res)=> {      
      if(res['validation'] == "Valid")
        console.log("123")
      
    });
  }

}
