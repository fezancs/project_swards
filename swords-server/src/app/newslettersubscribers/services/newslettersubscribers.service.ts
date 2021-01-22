import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Newslettersubscribers } from '../models/newslettersubscribers';
@Injectable({
  providedIn: 'root'
})
export class NewslettersubscribersService {

  private apiUrl = `${environment.apiUrl}/newslettersubscribers`;
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
    this.handleError = this.httpErrorHandler.createHandleError('NewslettersubscribersService')
  }

  getnewslettersubscribers(): Observable<Newslettersubscribers[]> {
    return this.http.get<Newslettersubscribers[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getnewslettersubscribers', []))
    )
  }

  getnewslettersubscriber(id: number) {
    return this.http.get<Newslettersubscribers>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getnewslettersubscriber', null))
    )
  }

  addnewslettersubscribers(newsletter: Newslettersubscribers) {
    return this.http.post<Newslettersubscribers>(`${this.apiUrl}/add`, newsletter, this.httpOptions)
    .pipe(
      catchError(this.handleError('addnewslettersubscribers', null))
    )
  }

  updatenewslettersubscribers(newsletter: Newslettersubscribers) {
    return this.http.put<Newslettersubscribers>(`${this.apiUrl}/update`, newsletter, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatenewslettersubscribers', null))
    )
  }

  deletenewslettersubscribers(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletenewslettersubscribers', null))
    )
  }
}
