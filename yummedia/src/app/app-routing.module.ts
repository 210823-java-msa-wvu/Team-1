import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {path: 'post/findposts', component:PostsComponent},
  {path: 'reviews', component:ReviewsComponent},
  {path: 'comments', component:CommentsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
