import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../../models/review';
import { ReviewsService} from '../../services/reviews.service'


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews: Review[];
  public editReview: Review;



  constructor(private reviewService : ReviewsService) {} //calling service
  
  ngOnInit(): void {
  }
  

  //read

  public getReviews(): void {
    this.reviewService.getAllReviews().subscribe(
      (response: Review[]) => {
        this.reviews = response;
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }


  //update

  public onUpdateReview(review: Review): void{
    this.reviewService.updateReview(review).subscribe(
      (response: Review) => {
        console.log(response);
        this.getReviews()
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  

} //end service
