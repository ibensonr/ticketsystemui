import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

  usersUrl = 'http://localhost:63196/api/User';

  constructor(private http: Http) { }

  getUserDetails(username, password) {
    return this.http.get(this.usersUrl + "?uname=" + username + "&pwd=" + password)
      .map(response => response.json())
      .map(user => this.formatUser(user))
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
    user.departments = data.tbluserdepartments;
    return user;
  }

}
