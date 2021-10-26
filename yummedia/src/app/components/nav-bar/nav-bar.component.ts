import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: any;
  public userService: UserService;
  isLoggedIn$: Observable<boolean>;
  
  constructor(
    private authenticationService: AuthenticationService,
    private uService: UserService,
    private router: Router,
    public dialog: MatDialog
    ) {
      this.user = authenticationService.currentUserValue;
      this.userService = uService;
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  public logOut() {
    this.authenticationService.logout();
    this.user = null;
    this.router.navigate(["login"])
    .then(() => {
      window.location.reload();
    });
  }
  
  public toRegister() {
    this.router.navigate(["registration"])
    .then(() => {
      window.location.reload();
    });
  }

  public toLogIn() {
    this.router.navigate(["login"])
    .then(() => {
      window.location.reload();
    });
  }

  public editProfile(u: User): void {
    console.log(u);
    this.userService.updateUser(u, u.id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal() {
    console.log("flag 1");
    const navbar = document.getElementById('nav-bar');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#editProfileModal');
    navbar?.appendChild(button);
    button.click();
    console.log("Opened");
  }

}
