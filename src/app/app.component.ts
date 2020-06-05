import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  LoggedIn

  constructor(private http: HttpClient) { }
  ngOnInit(){
    if (localStorage.getItem('currentUser') != null) {
      this.LoggedIn = true;
    } else {
      this.LoggedIn = false;
    }
    // http try
    this.http.get("/users").subscribe((kaki)=> {
      console.log(kaki);
    });
  }
  title = 'safe-save';
}



