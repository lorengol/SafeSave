import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  email
  password

  ngOnInit(): void {

  }

  signIn() {
    this.http.post("/users/getUserByEmail", this.email).subscribe((res)=> {
      
    });
  }

}
