import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginUserData = {};

  error: any = [];

  constructor(
    private register: RegisterService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  registerUser() {
    this.register.registerUser(this.loginUserData).subscribe( 
      res => this.handleResponse(res),
      error => this.handleError(error)
    );

  }

  handleResponse(data) {
    console.log(data);
    this.auth.setToken(data.access_token);
    this.router.navigate(['/']);
  }

  handleError(error) {
    this.error = error.error.errors;
    console.log(this.error);
  }


}
