import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, delay, Observable, tap, throwError} from 'rxjs';
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
  lastId = 0;

  getAll(): Observable<IIpItem[]> {
    return this.http.get<IIpItem[]>('https://62f0bd3157311485d135bea7.mockapi.io/ipzones', {
      params: new HttpParams({
        fromObject: {page: '', limit: 10}
      })
    }).pipe(
      delay(200),
      tap(items => this.ipItems = items.reverse()),
      tap(items => this.lastId = items[0].id),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(item: IIpItem): Observable<IIpItem> {
    return this.http.post<IIpItem>('https://62f0bd3157311485d135bea7.mockapi.io/ipzones', item)
      .pipe(
        tap(item=> this.ipItems.unshift(item)),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
