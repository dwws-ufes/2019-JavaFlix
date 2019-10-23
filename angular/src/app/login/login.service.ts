import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url = environment.api + '/api/login';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this._url, user);
  }

  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Erro ocorreu no lado do client
  //     errorMessage = error.error.message;
  //   } else {
  //     // Erro ocorreu no lado do servidor
  //     errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // };
}
