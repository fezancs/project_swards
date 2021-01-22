import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Customers } from '../models/customers';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl = `${environment.apiUrl}/customers`;
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
    this.handleError = this.httpErrorHandler.createHandleError('CustomersService')
  }

  getcustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getcustomers', []))
    )
  }

  getcustomer(id: number) {
    return this.http.get<Customers>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getcustomer', null))
    )
  }

  addcustomer(customer: Customers) {
    return this.http.post<Customers>(`${this.apiUrl}/add`, customer, this.httpOptions)
    .pipe(
      catchError(this.handleError('addcustomer', null))
    )
  }

  updatecustomer(customer: Customers) {
    return this.http.put<Customers>(`${this.apiUrl}/update`, customer, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatecustomer', null))
    )
  }

  deletecustomer(email: string) {
    return this.http.delete(`${this.apiUrl}/delete/${email}`)
    .pipe(
      catchError(this.handleError('deletecustomer', null))
    )
  }
}
