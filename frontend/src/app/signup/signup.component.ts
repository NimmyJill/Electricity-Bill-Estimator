import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { userDetailsModel } from './userDetails.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userCredential = new userDetailsModel(null, null, null);
  constructor(private usersService: UsersService, private router: Router) {}
  entry = true;
  ngOnInit(): void {}
  signup() {
    console.log('An Account Creating');
    if (document.getElementById('radioNormal')['checked']) {
      this.userCredential.type = 'other';
      this.entry = true;
    } else {
      this.userCredential.type = 'admin';
      if (
        this.userCredential.consumerName != 'admin' ||
        this.userCredential.password != 'admin@12345'
      ) {
        this.entry = false;
      } else {
        this.entry = true;
      }
    }
    if (this.entry) {
      this.usersService.signup(this.userCredential);
      console.log('Created an Account');
      this.router.navigate(['/login']);
      return;
    } else {
      alert('Sign-up denied');
    }
  }
}
