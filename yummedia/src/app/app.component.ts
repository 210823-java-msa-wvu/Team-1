import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review } from './models/review';
import { ReviewsService} from './services/reviews.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'yummedia';
  // public reviews: Review[];



  // constructor(private reviewService : ReviewsService) {} //calling service

  // public getReviews(): void {
  //   this.reviewService.getAllReviews().subscribe(
  //     (response: Review[]) => {
  //       this.reviews = response;
  //     },
  //     (error: HttpErrorResponse)=>{
  //       console.log(error);
  //     }
  //   );
  // }
}
