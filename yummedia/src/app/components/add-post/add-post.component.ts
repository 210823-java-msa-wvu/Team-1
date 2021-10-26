import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  currentUser: any;

  postForm: FormGroup | any;
  loading = false;
  submitted = false;
  error: string | any;
  hideUserId = false; // use this to hide the form element for inputing a user_id (*igIf = "hideUserId")
  

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService

  ) {
    this.currentUser = this.authenticationService.currentUserValue;

   }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      user_id: this.currentUser.id,
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      img_url: ['', Validators.required]
    });
  }


// convenience getter for easy access to form fields
get f() { return this.postForm.controls; }

// This method is to help submit a form to make a post
onSubmit() {
  this.postForm.user_id = this.currentUser.id;
  this.submitted = true;

  // stop here if form is invalid
  if (this.postForm.invalid) {
      return;
  }

  this.loading = true;
  this.postService.addPost(this.postForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['']); //, { queryParams: { registered: true }} // not sure if this is needed...
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}

}
