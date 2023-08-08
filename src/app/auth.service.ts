// AuthService.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmM2YWIwM2YxYmIxNTc3ZjU0NzgyZjkwNzk4ZjNlMCIsInN1YiI6IjY0YzhiZjJjODlmNzQ5MDEwN2MwYmQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nvly8B-YGbk5qE9HSYBFtQGaNZYmkzNbsSnya1qyQE8";

  // Method to set the token after login
  setToken(token: string) {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }

  // Method to get the token
  getToken() {
    
    return this.authToken;
  }
}
