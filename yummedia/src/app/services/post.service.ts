import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private springServerUrl= environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }

  // GET
  public getAllPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.springServerUrl}/post/findposts`)
  }

  // PUT

  // POST
  public addPost(post: any) {
    return this.http.post(`${this.springServerUrl}/post/addPost`, post);
  }

  // DELETE




}
