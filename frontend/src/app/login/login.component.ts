import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { userDetailsModel } from '../signup/userDetails.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails = <any>{};
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    console.log('Logged In');
    console.log(this.userDetails);

    this.usersService.login(this.userDetails).subscribe((res) => {
      if (res['message'] == 'Invalid credentials') {
        console.log('Invalid Details!!');
        alert('Invalid Details!!');
        this.router.navigate(['/login']);
      } else {
        console.log(res['user']);
        if (
          res['user'].consumerName == 'admin' &&
          res['user'].password == 'admin@12345' &&
          res['user'].type == 'admin'
        ) {
          localStorage.setItem('token', res['token']);
          console.log('Valid Details!!');
          this.router.navigate(['/admin']);
        } else if (res['user'].type == 'other') {
          localStorage.setItem('token', res['token']);
          this.router.navigate(['/bill']);
        }
      }
    });
  }
}
