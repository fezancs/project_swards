import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Reviews } from '../models/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiUrl = `${environment.apiUrl}/blogreviews`;
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
    this.handleError = this.httpErrorHandler.createHandleError('ReviewsService')
  }

  getreviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getreviews', []))
    )
  }

  deletereviews(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletereviews', null))
    )
  }

}
