import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review} from '../models/review';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private springServerUrl= environment.baseUrl;

  constructor( private http: HttpClient) { }

  public getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.springServerUrl}/reviews`);
  }

  public findReview(review_id: number): Observable<Review> {
    return this.http.get<Review>(`${this.springServerUrl}/reviews/${review_id}`); //add ${review_id}
  }

  public addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.springServerUrl}/reviews/new`, review);
  }
  public updateReview(review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.springServerUrl}/reviews/update`, review);
  }

  public deleteReview(review_id: number): Observable<void> {
    return this.http.delete<void>(`${this.springServerUrl}/review/delete/${review_id}`);
  }

}
