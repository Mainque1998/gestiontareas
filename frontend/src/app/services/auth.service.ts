import { Injectable } from '@angular/core';
import { LoginI } from '../interfaces/login.interface';
import { ResponseI } from '../interfaces/response.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:3000/auth";

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI>{
    let path = this.url + "/login";
    return this.http.post<ResponseI>(path, form).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
