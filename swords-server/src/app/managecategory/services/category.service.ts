import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiUrl}/managecategory`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('CategoryService')
  }

  getcategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getcategorys', []))
    )
  }

  getcategory(id: number) {
    return this.http.get<Category>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getcategory', null))
    )
  }

  updatecategory(category: Category) {
    return this.http.put<Category>(`${this.apiUrl}/update`, category, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateProduct', null))
    )
  }

  addcategory(category: Category) {
    return this.http.post<Category>(`${this.apiUrl}/add`, category, this.httpOptions)
    .pipe(
      catchError(this.handleError('addcategory', null))
    )
  }

  deletecategory(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletecategory', null))
    )
  }

  
}
