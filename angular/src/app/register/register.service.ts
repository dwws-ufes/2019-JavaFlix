import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url = environment.api + '/api/register';

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post<any>(this._url, user);
  }
}
