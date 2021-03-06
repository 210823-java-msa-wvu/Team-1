import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommentsDetailComponent } from './components/comment-detail/comment-detail.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import {Component, Inject} from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';

import { AddPostComponent } from './components/add-post/add-post.component';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    PostsComponent,
    CommentsComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    HomeComponent,
    NavBarComponent,
    CommentsDetailComponent,
    RegistrationComponent,
    AddPostComponent,
    PostDetailComponent, 
    
  ],
  entryComponents:[
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
 
    
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
