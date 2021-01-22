import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Bestsellers  } from '../models/bestsellers';

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  private apiUrl = `${environment.apiUrl}/bestsellers`;
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
    this.handleError = this.httpErrorHandler.createHandleError('BestsellersService')
  }

  getbestsellers(): Observable<Bestsellers[]> {
    return this.http.get<Bestsellers[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getbestsellers', []))
    )
  }

  addbestseller(product: Bestsellers) {
    return this.http.post<Bestsellers>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addbestseller', null))
    )
  }

  deletebestseller(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletebestseller', null))
    )
  }

}
