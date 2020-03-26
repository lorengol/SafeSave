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
    this.http.get("http://localhost:4201/users").subscribe((kaki)=> {
      console.log(kaki);
    });
  }
  title = 'safe-save';
}



