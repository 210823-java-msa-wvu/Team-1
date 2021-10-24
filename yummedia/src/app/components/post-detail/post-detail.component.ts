import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service'
import { Comment } from 'src/app/models/comment';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

  @Input() post?: Post;
  @Input() comment?: Comment;
  public commentsPost : Comment[] | any;


  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.getCommentsPost();
  }
  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(post => this.post = post);    
  }

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
  addComment(description:string): void {
    description = description.trim();
    if (!description) { return; }
    this.commentService.addComment({ description } as Comment)
      .subscribe(comment => {
        this.commentsPost.push(comment);
      });
  }
    
}
// add(name: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   this.heroService.addHero({ name } as Hero)
//     .subscribe(hero => {
//       this.heroes.push(hero);
//     });
// }