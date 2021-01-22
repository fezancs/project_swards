import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/products`;
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
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getProducts', []))
    )
  }

  getProduct(sku: string) {
    return this.http.get<Product>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getProduct', null))
    )
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addProduct', null))
    )
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/update`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateProduct', null))
    )
  }

  deleteProduct(sku: string) {
    return this.http.delete(`${this.apiUrl}/delete/${sku}`)
    .pipe(
      catchError(this.handleError('deleteProduct', null))
    )
  }

}
