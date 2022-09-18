import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { IIpItem } from '../models/ip-item';
import { ErrorService } from './error.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpZoneService {
  ipDataBase = 'https://62f0bd3157311485d135bea7.mockapi.io/ipzones';

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  ipItems: IIpItem[] = [];
  lastId = 0;

  getAll(): Observable<IIpItem[]> {
    return this.http.get<IIpItem[]>(this.ipDataBase, {
      params: new HttpParams({
        fromObject: {page: '', limit: 10}
      })
    }).pipe(
      delay(200),
      tap(items => {
        if (items.length > 0) this.ipItems = items.reverse();
      }),
      tap(items => {
        if (items.length > 0) this.lastId = items[0].id;
      }),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(item: IIpItem): Observable<IIpItem> {
    return this.http.post<IIpItem>(this.ipDataBase, item)
      .pipe(
        tap(item=> this.ipItems.unshift(item)),
        catchError(this.errorHandler.bind(this))
      )
  }

  delete(id: number): Observable<unknown>{
    const url = `${this.ipDataBase}/${id}`;
    const findElIndex = this.ipItems.findIndex(el=>el.id === id);
    this.ipItems.splice(findElIndex, 1);

    return this.http.delete(url)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  put(item: IIpItem): Observable<IIpItem>{
    const url = `${this.ipDataBase}/${item.id}`;
    const findElIndex = this.ipItems.findIndex(el=>el.id === item.id);
    this.ipItems[findElIndex] = item;
    return this.http.put<IIpItem>(url, item)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
