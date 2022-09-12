import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs';
import {IIpItem} from '../models/ip-item';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class IpZoneService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  ipItems: IIpItem[] = [];

  getAll(): Observable<IIpItem[]> {
    return this.http.get<IIpItem[]>('https://62f0bd3157311485d135bea7.mockapi.io/ipzones', {
      params: new HttpParams({
        fromObject: {page: '', limit: 10}
      })
    }).pipe(
      delay(200),
      tap(items => this.ipItems = items),
      catchError(this.errorHandler.bind(this))
    )
  }

  // create(product: IIpItem): Observable<IIpItem> {
  //   return this.http.post<IIpItem>('https://fakestoreapi.com/products', product)
  //     .pipe(
  //       tap(prod => this.products.push(prod))
  //     )
  // }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
