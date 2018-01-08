import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private isAuthenticated:boolean = !!sessionStorage.getItem('userid');
  userData:User;

  constructor(private userService: UserService, private _router: Router) {
    console.log(this.isAuthenticated);
    userService.loggedIn$.subscribe(
      status => {
        this.isAuthenticated = status;
        this.userData = JSON.parse(sessionStorage.getItem('userid'));
        //alert('status changed!');
      });
   }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('userid');
    this.userService.logout();
    this._router.navigate(['']);
  }

}
