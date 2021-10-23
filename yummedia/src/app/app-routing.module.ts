import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';

const routes: Routes = [
  {path: 'post/findposts', component:PostsComponent},
  {path: 'reviews', component:ReviewsComponent},
  {path: 'comments', component:CommentsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
