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

  public user: User;
  public userService: UserService;
  
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
  }

  public logOut() {
    this.authenticationService.logout();
    this.router.navigate(["login"]);
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
