import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Specialproducts  } from '../models/specialproducts';

@Injectable({
  providedIn: 'root'
})
export class SpecialproductsService {

  private apiUrl = `${environment.apiUrl}/specialproducts`;
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
    this.handleError = this.httpErrorHandler.createHandleError('SpecialproductsService')
  }

  getspecialproducts(): Observable<Specialproducts[]> {
    return this.http.get<Specialproducts[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getspecialproducts', []))
    )
  }

  addspecialproducts(product: Specialproducts) {
    return this.http.post<Specialproducts>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addspecialproducts', null))
    )
  }

  deletespecialproducts(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletespecialproducts', null))
    )
  }
}
