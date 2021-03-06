import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: User;
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  login() {
    var uname = this.username;
    var pwd = this.password;
    this.userService.getUserDetails(uname, pwd)
      .subscribe(user => {
        console.log(user);
        this.userData = user;
        if (this.userData != undefined && this.userData != null) {

          if (this.userData.departments == null || this.userData.departments.length == 0) {
            const link = ['/tickets'];
            this.router.navigate(link);
          }
          else if (this.userData.departments.length > 0)
          {
            const link = ['/tickets/helpdeskview'];
            this.router.navigate(link);
          }
        }
      },
      err => console.log(err))

  }
}
