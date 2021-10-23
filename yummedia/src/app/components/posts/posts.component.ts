import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public post : Post[] | any;
  
  private headers = {'Content-Type': 'application/json'}


  constructor(private postService: PostService) { }

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
