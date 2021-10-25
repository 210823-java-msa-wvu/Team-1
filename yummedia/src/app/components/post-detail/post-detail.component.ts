import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service'
import { Comment } from 'src/app/models/comment';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first, min } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { async } from '@angular/core/testing';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  error: string | any;
  loading = false;
  currentUser : User;

  

  postJSON: Post =  {
    post_id: 2,
    user_id: 1,
    description: "post2",
    ingredients: "bread",
    img_url: "slkdfjs;ljf;d.com",
    likes: 1,
    flag: false
  }
  postJSON2: Post =  {
    "post_id": 35,
    "user_id": 1,
    "description": "post2",
    "ingredients": "bread",
    "img_url": "slkdfjs;ljf;d.com",
    "likes": 1,
    "flag": false
  }

  @Input() post?: Post;
  // @Input() comment?: Comment;
  public commentsPost : Comment[] | any;


  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private location: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService

  ) {
    this.currentUser = this.authenticationService.currentUserValue;

    console.log(this.currentUser);
   }

  ngOnInit(): void {

    console.log("BEFORE" + this.postJSON2.post_id);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(
        post => {
          (this.post = post);
          // console.log((this.post=post).post_id);
          console.log("CORRECT POST ID " + (this.post=post).post_id);
          this.postJSON2.post_id = (this.post=post).post_id;
          console.log("After2222 " + this.postJSON2.post_id);
          
        },
        );
    console.log("After 1111111 " + this.postJSON2.post_id);

    this.getCommentsPost();




    this.registerForm = this.formBuilder.group( {
      user: this.currentUser,
      post: this.postJSON2,
      commentDescription: ["", Validators.required]
    })

    
  
  }


  get f () { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;



    // this.registerForm = this.formBuilder.group( {
    //   user: this.currentUser,
    //   post: ["", Validators.required],
    //   commentDescription: ["", Validators.required]
    // })


    console.log("After 33333333 " + this.postJSON2.post_id);


    this.commentService.addComment((this.registerForm.value))
        .pipe(first())
        .subscribe(
            data => {
                // this.router.navigate(['/login'], { queryParams: { registered: true }});
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}


  // returnPost() {
  //   this.userService.getUser()
  //     .map((user: Array<any>) => {
  //       let result:Array<User> = [];
  //       if (user) {
  //         user.forEach((erg) => {
  //           result.push(new User(erg.nickname, erg.id, erg.name, erg.nachname, erg.pictURL, erg.city ));
  //         });
  //       }
  //       return result; // <<<=== missing return
  //     })
  //     .subscribe(user => this.user = user);
  // }
  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(
        post => {
          (this.post = post);
          
        },
        );
    
    
  }
  // getPostId(): Observable<Post> {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   var postId: number;
  //   this.postService.getPost(id)
  //     .subscribe(
  //       post => {
  //         (this.post = post);
  //         postId = (this.post=post).post_id;
  //       },
  //       );
  //   return postId;
  // }


  getCommentsPost(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commentService.getAllCommentsPosts(id)
    .subscribe(
      (response:Comment[])=>{
        this.commentsPost = response
      },
      (error: HttpErrorResponse) =>{
        console.log(error)
      }
    )
  }
}
