import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private apiUrl = `${environment.apiUrl}/managesubcategory`;
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
    this.handleError = this.httpErrorHandler.createHandleError('SubcategoryService')
  }

  getsubcategorys(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getsubcategorys', []))
    )
  }

  getsubcategory(id: number) {
    return this.http.get<Subcategory>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getsubcategory', null))
    )
  }

  updatesubcategory(subcategory: Subcategory) {
    return this.http.put<Subcategory>(`${this.apiUrl}/update`, subcategory, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatesubProduct', null))
    )
  }

  addsubcategory(subcategory: Subcategory) {
    return this.http.post<Subcategory>(`${this.apiUrl}/add`, subcategory, this.httpOptions)
    .pipe(
      catchError(this.handleError('addsubcategory', null))
    )
  }

  deletesubcategory(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletesubcategory', null))
    )
  }

}
