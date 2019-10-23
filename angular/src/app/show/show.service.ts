import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private _url = environment.api + '/api/show';
  
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private _http: HttpClient) { }

  getShows(): Observable<any> {
    return this._http.get<any>(this._url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };

  getShowById(id: number): Observable<Show> {
    return this._http.get<Show>(this._url + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );;
  }

  saveShow(show: Show): Observable<Show> {
    return this._http.post<Show>(this._url, JSON.stringify(show), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateShow(show: Show): Observable<Show> {
    return this._http.put<Show>(this._url + '/' + show.id, JSON.stringify(show), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteShow(show: Show) {
    return this._http.delete<Show>(this._url + '/' + show.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  
}
