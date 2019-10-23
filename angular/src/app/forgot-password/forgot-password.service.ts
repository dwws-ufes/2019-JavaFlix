import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private _url = environment.api + '/api/password/email';

  constructor(private http: HttpClient) { }

  rememberUser(user: any) {
    return this.http.post<any>(this._url, user);
  }
}
