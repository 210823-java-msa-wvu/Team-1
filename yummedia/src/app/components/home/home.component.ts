import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
// import { PostsComponent } from '../posts/posts.component';
// import {Review} from'../reviews/reviews.component';
import { Post } from 'src/app/models/post';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { from } from 'rxjs';

// @NgModule({
//   declarations: [PostsComponent]
// })

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  // public review: Review[] | any;
  public post : Post[] | any;
  
  constructor(
    // private postComponent: PostsComponent,
    private postService: PostService,
    private authenticationService: AuthenticationService
    
    ) { 
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit(): void {
    this.getPosts();
    // this.postComponent;
  }

  // // READ 
  // public onSubmit(): void {
  //   this.postComponent.onSubmit;
  // }
  // // this.postComponent


  public getPosts(): void {
    this.postService.getAllPosts()
    .subscribe(
      (response:Post[]) => {
        this.post = response
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
      
    );
  }

}
