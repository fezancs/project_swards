import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Crosssells } from '../models/crosssells';
@Injectable({
  providedIn: 'root'
})
export class CrosssellsService {

  private apiUrl = `${environment.apiUrl}/crosssells`;
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
    this.handleError = this.httpErrorHandler.createHandleError('CrosssellsService')
  }

  getcrosssells(): Observable<Crosssells[]> {
    return this.http.get<Crosssells[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getcrosssells', []))
    )
  }

  getcrosssell(sku: string) {
    return this.http.get<Crosssells>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getcrosssell', null))
    )
  }

  addcrosssell(product: Crosssells) {
    return this.http.post<Crosssells>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addcrosssell', null))
    )
  }

  deleteupsell(sku: string , upsells_sku:string) {
    return this.http.delete(`${this.apiUrl}/delete/${sku}/${upsells_sku}`)
    .pipe(
      catchError(this.handleError('deleteupsell', null))
    )
  }

}
