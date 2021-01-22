import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Relatedproducts } from '../models/relatedproducts';
@Injectable({
  providedIn: 'root'
})
export class RelatedproductsService {

  private apiUrl = `${environment.apiUrl}/relatedproducts`;
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
    this.handleError = this.httpErrorHandler.createHandleError('RelatedproductsService')
  }

  getProducts(): Observable<Relatedproducts[]> {
    return this.http.get<Relatedproducts[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getrelatedProducts', []))
    )
  }

  getProduct(sku: string) {
    return this.http.get<Relatedproducts>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getrelatedProduct', null))
    )
  }

  addProduct(product: Relatedproducts) {
    return this.http.post<Relatedproducts>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addProduct', null))
    )
  }

  deleteProduct(sku: string , related_sku:string) {
    return this.http.delete(`${this.apiUrl}/delete/${sku}/${related_sku}`)
    .pipe(
      catchError(this.handleError('deleteProduct', null))
    )
  }

}
