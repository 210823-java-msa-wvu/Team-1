import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../../models/review';
import { ReviewsService} from '../../services/reviews.service'
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  
})
export class ReviewsComponent implements OnInit {

  public reviews: Review[] |any;
  public editReview: Review | any;
  public deleteReview: Review | any;
  // public deleteReview: Review;
  // reviewForm: FormGroup;
  // review: new FormControl('');
  // Review : Review;



  constructor(
    private reviewService : ReviewsService
    ){
    // this.reviewForm = new FormGroup({review: this.review,});


  } 
  
  ngOnInit(): void {
    this.getReviews();
    
    
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

  //add review
  public addReview(addForm : NgForm): void{
    document.getElementById('reviewForm')?.click();
    this.reviewService.addReview(addForm.value).subscribe(
      (response: Review)=>{
        console.log(response);
        this.getReviews();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        addForm.reset();
      }
    )

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

  //delete

  public ondeleteReview( review_id : number): void{
    this.reviewService.deleteReview(review_id).subscribe(
      (response: void ) =>{
        console.log(response);
        this.getReviews();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        console.log(error);
      }
    )
  }

  



  //logic for buttons
  public  onOpenModel(review: Review, mode: string): void{
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addReviewModal');
    }
    if (mode === 'edit') {
      this.editReview = review;
      button.setAttribute('data-target', '#updateReviewModal');
    }
    // if (mode === 'delete') {
    //   this.ondeleteReview = review;
    //   button.setAttribute('data-target', '#deleteReviewModal');
    // }
    // container.appendChild(button);
    // button.click();
  }

} //end service
