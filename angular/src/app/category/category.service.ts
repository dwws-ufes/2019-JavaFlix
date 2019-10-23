import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Category } from './category';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _url = environment.api + '/api/category';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<any> {
    return this._http.get<any>(this._url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updateCategory(category: Category): Observable<Category> {
    return this._http.put<Category>(this._url + '/' + category.id, JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  saveCategory(category: Category): Observable<Category> {
    return this._http.post<Category>(this._url, JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deleteCategory(category: Category): Observable<Category> {
    return this._http.delete<Category>(this._url + '/' + category.id, this.httpOptions)
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
