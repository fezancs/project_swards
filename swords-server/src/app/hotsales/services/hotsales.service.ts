import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Hotsales } from '../models/hotsales';

@Injectable({
  providedIn: 'root'
})
export class HotsalesService {

  private apiUrl = `${environment.apiUrl}/hotsales`;
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
    this.handleError = this.httpErrorHandler.createHandleError('HotsalesService')
  }

  gethotsales(): Observable<Hotsales[]> {
    return this.http.get<Hotsales[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('gethotsales', []))
    )
  }

  addhotsales(hotsales: Hotsales) {
    return this.http.post<Hotsales>(`${this.apiUrl}/add`, hotsales, this.httpOptions)
    .pipe(
      catchError(this.handleError('addpopular', null))
    )
  }

  deletehotsales(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletepopular', null))
    )
  }
}
