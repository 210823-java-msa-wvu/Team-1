import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './models/review';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'yummedia';
  // public review: Review[];



  constructor( private http: HttpClient) {} //calling service
}
