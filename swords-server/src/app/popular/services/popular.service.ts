import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Popular  } from '../models/popular';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  private apiUrl = `${environment.apiUrl}/popular`;
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
    this.handleError = this.httpErrorHandler.createHandleError('PopularService')
  }

  getpopular(): Observable<Popular[]> {
    return this.http.get<Popular[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getpopular', []))
    )
  }

  addpopular(popular: Popular) {
    return this.http.post<Popular>(`${this.apiUrl}/add`, popular, this.httpOptions)
    .pipe(
      catchError(this.handleError('addpopular', null))
    )
  }

  deletepopular(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletepopular', null))
    )
  }
}
