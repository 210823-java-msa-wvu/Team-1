import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private springServerUrl= environment.baseUrl;
  private headers = {'Content-Type': 'application/json'}


  constructor(
    private http: HttpClient
  ) { }

  // GET
  public getAllComments() : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.springServerUrl}/comments`)
  }
  
  // POST

  public addComment(comment: Comment) : Observable<any>{

    return this.http.post(
      this.springServerUrl,
      JSON.stringify(comment),
      {
        headers: this.headers,
        withCredentials: true
      }
    ).pipe(
      map((response) => response),
      catchError((err) => err)
    )
  }
  // addBook(book: Book): Observable<any> {

  //   return this.http.post(
  //     this.baseUrl,
  //     JSON.stringify(book),
  //     {
  //       headers: this.headers,
  //       withCredentials: true
  //     }
  //   ).pipe(
  //     map(response => response),
  //     catchError(err => err)
  //   )

  // }


}

