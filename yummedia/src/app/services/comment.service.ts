import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/comment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private springServerUrl= environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  // GET
  public getAllComments() : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.springServerUrl}/comments`)
  }

  public getAllCommentsPosts(id: number) : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.springServerUrl}/comments/post/${id}`)
  }
  
  /** GET hero by id. Will 404 if id not found */
  getComment(id: number): Observable<Comment> {
    const url = `${this.springServerUrl}/comments/${id}`;
    return this.http.get<Comment>(url)
  }


  // public addUser(user: any) {
  //   return this.http.post(`${this.springServerUrl}/users/addUser`, user);
  // }
  /** POST: add a new hero to the server */
  // public addComment(comment: Comment): Observable<Comment> {
  //   console.log("fuck" + comment.commentDescription);
  //   const url = `${this.springServerUrl}/comments`;

  //   return this.http.post<Comment>(url, comment);
    
  // }
    public addComment(comment: any) {
    return this.http.post(`${this.springServerUrl}/comments`, comment);
  }


}
