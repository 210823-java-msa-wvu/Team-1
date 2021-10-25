import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsDetailComponent } from './components/comment-detail/comment-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'post/findposts', component:PostsComponent},
  {path: 'reviews', component:ReviewsComponent},
  {path: 'comments', component:CommentsComponent},
  {path: 'comments/:id', component: CommentsDetailComponent},

  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'post/findposts/:id', component: PostDetailComponent},
  {path: 'comments/post/:id', component: PostDetailComponent},
  {path: 'comments', component: PostDetailComponent}

  // // otherwise, redirect to home
  // {path: '**', redirectTo: ''}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
