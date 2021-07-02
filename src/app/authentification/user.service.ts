import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { USER } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private apiServer = "http://localhost:3000/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  login(user:USER): Observable<USER> {
    return this.http.post<USER>(this.apiServer ,JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getbyid(user:USER,id:string): Observable<USER> {
    return this.http.get<USER>(this.apiServer+id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getbyrole(role:string): Observable<USER[]> {
    return this.http.get<USER[]>(this.apiServer+"role/"+role)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
