import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _signupUrl='http://localhost:3113/api/signup';
  // private _loginUrl='http://localhost:3113/api/login';

  constructor(private http:HttpClient) { }
  signup(user){
   console.log(user);
   return this.http.post(this._signupUrl,{"user":user})
   .subscribe(data =>{ console.log(data)})   
  }
  login(credential){
    // console.log(credential);
   return this.http.post('http://localhost:3113/api/login',{"credential":credential})
  //  .subscribe(data =>{ console.log(data)});
  }

  loggedIn()
  {
    
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  //Autherisation
  identifyUserRole()
{
  let token=localStorage.getItem('token');

  if(!!token)
  {
    let decodedToken = jwt_decode(token);
    let userType=decodedToken['type'];
   // console.log(decodedToken);
    //console.log(decodedToken['subject']);
    if(userType=='admin')
    {
      console.log("FULL ACCESS GRANTED!")
      return true;
    }
    else
    {
      //console.log("FULL ACCESS DENIED!")
      return false;
    } 
  }
  else
  {
    return false;
  }

}
}
