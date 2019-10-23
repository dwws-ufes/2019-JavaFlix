import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  error: any = [];

  constructor(
    private login: LoginService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.login.loginUser(this.loginUserData).subscribe(
      res => {
        //console.log(res);
        this.handleResponse(res);
      },
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    if(data !== null) {
      console.log(data);
      this.auth.setToken(data.access_token);
      this.router.navigateByUrl('/');
    }
  }

  handleError(error) {
    this.error = error.error;
    console.log(error);
  }

}
