import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Upsells } from '../models/upsells';
@Injectable({
  providedIn: 'root'
})
export class UpsellsService {

  private apiUrl = `${environment.apiUrl}/upsells`;
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
    this.handleError = this.httpErrorHandler.createHandleError('UpsellsService')
  }

  getupsells(): Observable<Upsells[]> {
    return this.http.get<Upsells[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getupsells', []))
    )
  }

  getupsell(sku: string) {
    return this.http.get<Upsells>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getupsell', null))
    )
  }

  addupsell(product: Upsells) {
    return this.http.post<Upsells>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addupsell', null))
    )
  }

  deleteupsell(sku: string , upsells_sku:string) {
    return this.http.delete(`${this.apiUrl}/delete/${sku}/${upsells_sku}`)
    .pipe(
      catchError(this.handleError('deleteupsell', null))
    )
  }
}
