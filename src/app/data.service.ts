import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from './auth.service'; // Import the AuthService

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  // Method to fetch data from the API with the dynamic API link
  getData(apiUrl: string) {
    const authToken = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get<any>(apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
