import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
  styleUrls: ['./header-inner.component.scss']
})
export class HeaderInnerComponent implements OnInit {
  user: any = {
    name: '',
  };

  constructor(
    private auth: AuthService,
    private router: Router) { }

    ngOnInit() {
      console.log(this.user);
      this.getUser();
    }

  logout() {
    this.auth.removeToken();
    return this.router.navigate(['/login']);
  }

  getUser() {
    this.auth.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    );
  }

}
