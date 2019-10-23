import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  userData: any = {};
  error: any = [];
  success: any = [];


  constructor(
    private _activatedRoute: ActivatedRoute,
    private reset: ResetPasswordService,
    ) {
      this._activatedRoute.queryParams.subscribe(
        params => this.userData.token = params['token']
      );
      console.log(this.userData.token);
    }

  ngOnInit() {
  }

  resetUser() {
    this.reset.resetUser(this.userData).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.success = data;
  }

  handleError(error) {
    if ( 'errors' in error.error) {
      this.error = error.error.errors;
      console.log(this.error);
    } else {
      this.error = error.error;
      console.log(this.error);

    }
  }

}
