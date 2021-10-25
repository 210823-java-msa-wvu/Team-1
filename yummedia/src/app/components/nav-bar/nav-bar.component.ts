import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { User } from '../../models/user';
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
    private router: Router
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

  public editProfile(): void {
    this.userService.updateUser(this.user).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal() {
    const navbar = document.getElementById('navbar');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#editProfileModal');
    navbar?.appendChild(button);
    button.click();
  }

}
