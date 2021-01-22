import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Onlinecustomers } from '../models/onlinecustomers';
@Injectable({
  providedIn: 'root'
})
export class OnlinecustomersService {

  private apiUrl = `${environment.apiUrl}/onlinecustomers`;
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
    this.handleError = this.httpErrorHandler.createHandleError('OnlinecustomersService')
  }

  getonlinecustomers(): Observable<Onlinecustomers[]> {
    return this.http.get<Onlinecustomers[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getonlinecustomers', []))
    )
  }

  
}
