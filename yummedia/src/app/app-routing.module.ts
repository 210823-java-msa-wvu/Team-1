import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsDetailComponent } from './components/comment-detail/comment-detail.component';

const routes: Routes = [
  {path: 'post/findposts', component:PostsComponent},
  {path: 'reviews', component:ReviewsComponent},
  {path: 'comments', component:CommentsComponent},
  {path: 'comments/:id', component: CommentsDetailComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
