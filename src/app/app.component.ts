import { Component } from '@angular/core';
import { User } from 'server/src/entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor() { }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  getUserName() {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) as User;
    return `${loggedInUser.first_Name} ${loggedInUser.last_Name}`;
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }
}



