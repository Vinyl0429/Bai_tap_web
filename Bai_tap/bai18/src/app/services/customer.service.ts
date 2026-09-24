import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CustomerType } from '../classes/customer-type';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly url = 'assets/data/customers.json';

  constructor(private http: HttpClient) {}

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.url).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error(error.message));
  }
}
