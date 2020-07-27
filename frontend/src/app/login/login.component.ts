import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {userDetailsModel} from '../signup/userDetails.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userDetails=<any>{}
  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log('Logged In');
    console.log(this.userDetails);
    this.usersService.login(this.userDetails)
    .subscribe((credential)=>{
      if(credential===null)
      {
        console.log("Invalid Details!!");
        this.router.navigate(['/login']);
        
      }
      else
      {
        localStorage.setItem('token',credential['token'])
        console.log("Valid Details!!");
        this.router.navigate(['/bill']);         
      }
    })
    // this.router.navigate(['/']);

  }

}

