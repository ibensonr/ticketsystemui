import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private loggedIn = new Subject<boolean>();
  loggedIn$ = this.loggedIn.asObservable();
  userData:User;
  usersUrl = 'http://localhost:63196/api/User';

  constructor(private http: Http) { }

  getUserDetails(username, password) {
    return this.http.get(this.usersUrl + "?uname=" + username + "&pwd=" + password)
      .map(response => response.json())
      .map(user => {
        this.userData = this.formatUser(user);
        sessionStorage.setItem('userid', JSON.stringify(this.userData));
        this.loggedIn.next(true);
        return this.userData;
      })
      .catch(this.handleErrors);
  }

  private handleErrors(errResponse) {
    const errorMessage = errResponse.json().error.message;

    return Observable.throw('Internal Server Error : ' + errorMessage);
  }

  private formatUser(data) {
    let user = new User();
    user.id = data.id;
    user.username = data.uname;
    user.departments = data.tbldepartments;
    return user;
  }

  logout():void {
    sessionStorage.removeItem('userid');
    this.loggedIn.next(false);
  }

}
