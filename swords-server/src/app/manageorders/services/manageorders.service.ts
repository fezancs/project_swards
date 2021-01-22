import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Vieworders } from '../models/vieworders';
import { invoice } from '../models/customerorderdetails';
@Injectable({
  providedIn: 'root'
})
export class ManageordersService {

  private apiUrl = `${environment.apiUrl}/orders`;
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
    this.handleError = this.httpErrorHandler.createHandleError('ManageordersService')
  }

  getorders(): Observable<Vieworders[]> {
    return this.http.get<Vieworders[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getorders', []))
    )
  }

  getorderdetails(order_id: number) {
    console.log(order_id);
    return this.http.get<any>(`${this.apiUrl}/${order_id}`)
    .pipe(
      catchError(this.handleError('getorderdetails', null))
    )
  }
   
  getcustomerorderdetails(id: number) {
    return this.http.get<any>(`${this.apiUrl}/orderdetails/${id}`)
    .pipe(
      catchError(this.handleError('getorderdetails', null))
    )
  }
  getinvoice(id: number) {
    return this.http.get<invoice>(`${this.apiUrl}/invoice/${id}`)
    .pipe(
      catchError(this.handleError('getProduct', null))
    )
  }
  getshippinginfo(id: number) {
    return this.http.get<invoice>(`${this.apiUrl}/shippinginfo/${id}`)
    .pipe(
      catchError(this.handleError('getProduct', null))
    )
  }

}
