import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _signupUrl = 'http://localhost:3113/api/signup';

  constructor(private http: HttpClient) {}
  signup(user) {
    console.log(user);
    return this.http.post(this._signupUrl, { user: user }).subscribe((data) => {
      console.log(data);
    });
  }
  login(credential) {
    return this.http.post('http://localhost:3113/api/login', {
      credential: credential,
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  //Autherisation
  identifyUserRole() {
    let token = localStorage.getItem('token');

    if (!!token) {
      let decodedToken = jwt_decode(token);
      let userType = decodedToken['type'];
      if (userType == 'admin') {
        console.log('FULL ACCESS GRANTED!');
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
