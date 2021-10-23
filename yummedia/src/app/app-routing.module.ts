import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {path: 'post/findposts', component:PostsComponent},
  {path: 'reviews', component:ReviewsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
