import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private springServerUrl= environment.baseUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject);
   }

   public get currentUserValue(){
     return this.currentUserSubject.value;
   }

   login(username : string, password: string) {
     // here is where I need to access the user table in order to login a user. Inside the backticks
     return this.http.post<any>(`${this.springServerUrl}/users/login`, {username, password})
     .pipe(map(user => {
       // store user detail and jwt token in local storage to keep user logged in between page refreshes
       localStorage.setItem('currentUser', JSON.stringify(user));
       this.currentUserSubject.next(user);
       console.log(`authentication.service.ts  -  logging user: `, user);
       this.loggedIn.next(true);
       return user;
     }));
     
   }
   

   logout(){
     // remove user from local storage and set current user to null
     localStorage.removeItem("currentUser");
     this.loggedIn.next(false);
     this.currentUserSubject.next(null);
   }

   get isLoggedIn() {
     return this.loggedIn.asObservable();
   }
}
