import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;


  public post : Post[] | any;
  
  constructor(
    private postService: PostService,
    private authenticationService: AuthenticationService
    
    ) { 
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit(): void {
    this.getPosts();
  }

  // READ 
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
