import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

export class user {
  id:number;
  first_Name:string;
  last_Name:string;
  email:string;
  password:string;
  imcome:number;   
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm;

  get f() { return this.registrationForm.controls; }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }  

  UserToRegister:user = {} as any;

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })

    // this.UserToRegister = new user();
  }

  submit(){
    if(this.f.password.value != this.f.confirmPassword.value) {
      alert("אישור סיסמא לא תואם לסיסמא שהקלדת")
    } else {
      this.http.post("/users", this.UserToRegister, {responseType: 'text'}).subscribe((res)=> {
        console.log("success");
      });
    }
  }
}
