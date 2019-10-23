import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html',
  styleUrls: ['./sidebar-left-inner.component.scss']
})
export class SidebarLeftInnerComponent implements OnInit {

  user: any = {
    name: '',
  };
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auth.getUser().subscribe(
      data => this.user = data
    );
  }

}
