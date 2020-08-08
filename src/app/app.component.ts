import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'server/src/entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  userName: String;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(){
    // http try
    this.http.get("/users").subscribe((kaki)=> {
      console.log(kaki);
    });

    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) as User;
    this.userName = `${loggedInUser.first_Name} ${loggedInUser.last_Name}`;
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }
}



