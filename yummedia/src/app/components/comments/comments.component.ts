import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {

  public comments : Comment[] | any;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  public getComments(): void {
    this.commentService.getAllComments()
    .subscribe(
      (response:Comment[]) => {
        this.comments = response
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  // public addComment(comment: Comment): void {
  //   this.commentService.addComment(comment)
  //   .subscribe(
  //     (response:Comment)=> {
  //       this.com
  //     }
  //   )

  // }

}

//   // READ 
//   public getPosts(): void {
//     this.postService.getAllPosts()
//     .subscribe(
//       (response:Post[]) => {
//         this.post = response
//       },
//       (error: HttpErrorResponse) => {
//         console.log(error)
//       }
      
//     );
//   }

// }
