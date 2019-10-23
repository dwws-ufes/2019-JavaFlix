import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userData = {};
  error: any = [];
  success: any = [];


  constructor(private forgot: ForgotPasswordService) { }

  ngOnInit() {
  }

  rememberUser() {
    this.forgot.rememberUser(this.userData).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.success = data;
  }

  handleError(error) {
    this.error = error.error;
    console.log(error);
  }
}
