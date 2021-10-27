import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
// import { PostsComponent } from '../posts/posts.component';
// import {Review} from'../reviews/reviews.component';
import { Post } from 'src/app/models/post';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { from } from 'rxjs';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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
  img_url : string ='';

  // public review: Review[] | any;
  public post : Post[] | any;

  public user : User[] | any;
  
  constructor(
    // private postComponent: PostsComponent,
    private postService: PostService,
    private userService: UserService,
    private authenticationService: AuthenticationService
    
    ) { 
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
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

  public getUsers(): void {
    this.userService.getAllUsers()
    .subscribe(
      (response:User[]) => {
        this.user = response
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    );
  }


  public getUsername(user_id: number): any {

    let userList: User[] = this.user;

    let username: string ; 

    for(let i = 0; i<userList.length; i++) {

      if (user_id == userList[i].id){
        username = userList[i].username;
        return username;
      }

    }

    // return username;

  }


}
