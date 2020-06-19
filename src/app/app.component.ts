import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(){
    // http try
    this.http.get("/users").subscribe((kaki)=> {
      console.log(kaki);
    });
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }
}



