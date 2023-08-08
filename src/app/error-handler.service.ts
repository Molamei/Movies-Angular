import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  logError(errorMessage: string) {
    console.error(errorMessage);
  }
}
