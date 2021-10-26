import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private springServerUrl= environment.baseUrl;


  constructor( private http: HttpClient) { }

  // POST
  public addUser(user: any) {
    return this.http.post(`${this.springServerUrl}/users/addUser`, user);
  }

  // GET
  public getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.springServerUrl}/users/find`);
  }

  public getUser(user_id: number) : Observable<User[]> {
    return this.http.get<User[]>(`${this.springServerUrl}/users/find/${user_id}`);
  }

  public getByUsername(username: string) : Observable<User[]> {
    return this.http.get<User[]>(`${this.springServerUrl}/users/findUsername/${username}`);
  }

  // PUT
  public updateUser(user : any, id: number) {
    console.log(user);
    return this.http.put(`${this.springServerUrl}/users/update/${id}`, user);
  }


  // DELETE
  public deleteUser(user_id: number)  {
    return this.http.delete(`${this.springServerUrl}/users/delete/${user_id}`);
  }






}
