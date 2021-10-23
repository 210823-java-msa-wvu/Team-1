import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private springServerUrl= environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  // GET
  public getAllComments() : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.springServerUrl}/comments`)
  }


}

