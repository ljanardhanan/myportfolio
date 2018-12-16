import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {Student} from './student';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    };

    getStudents(): Observable<any> {
      return this.http.get('http://localhost:3000/api/students').pipe(
        map((res => res)));
    }

    addStudent(newStudent): Observable<any> {
      var headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/student',newStudent,{headers:headers})
      .pipe(map(res => res));
    }

    deleteStudent(id): Observable<any> {
      return this.http.delete('http://localhost:3000/api/student'+'/'+id)
      .pipe(map(res => res));
   }
}