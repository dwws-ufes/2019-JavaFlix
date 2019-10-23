import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log(this.auth.getToken());
    console.log(this.auth.loggedIn());
  }

}
