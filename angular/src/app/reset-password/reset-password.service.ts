import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private _url = environment.api + '/api/password/reset';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  resetUser(user: any) {
    return this.http.post<any>(this._url, JSON.stringify(user), this.httpOptions) ;
  }
}
