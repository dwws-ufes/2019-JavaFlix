import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = environment.api + '/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    })
  }
  
  constructor(private http: HttpClient) { }

  setToken(token) {
    localStorage.setItem('token', token);
  }
  
  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    return this.getToken() !== null;
  }

  getUser() {
    console.log(this.httpOptions);
    return this.http.get<any>(this._url, this.httpOptions) ;
  }
}
