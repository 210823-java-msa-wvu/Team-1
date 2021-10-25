import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { User } from '../../models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: User;
  
  constructor(private authenticationService: AuthenticationService) {
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit(): void {
  }

  public logOut() {

  }

  public editProfile() {

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
