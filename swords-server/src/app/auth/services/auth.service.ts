import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError , tap , mapTo} from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';
//import * as  jwt_decode from 'jwt-decode';
import jwt_decode, { JwtPayload } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  private handleError: HandleError;
  redirectUrl:string;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient,private httpErrorHandler: HttpErrorHandlerService) 
  {
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')
  }

  login(data: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/login`, data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
      catchError(this.handleError('login', false))
    )
  }

  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
      
  getDecodeToken(token: string) {
    return jwt_decode<JwtPayload>(token)
    //return jwt_decode(token);
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if(currentUser) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  
  logout() {
    localStorage.removeItem('currentUser');
  }
  
}
