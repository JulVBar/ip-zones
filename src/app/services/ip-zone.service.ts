import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, debounceTime, delay, Observable, Subject, tap, throwError } from 'rxjs';
import { IIpItem } from '../models/ip-item';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class IpZoneService {
  ipDataBase = 'https://62f0bd3157311485d135bea7.mockapi.io/ipzones';
  districtsUrl = 'https://62f0bd3157311485d135bea7.mockapi.io/districts';

  currentIpItem$ = new Subject<IIpItem>();

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  ipItems: IIpItem[] = [];
  lastId = 0;
  lastAddedCode: string;

  private isCreatedItem = new Subject<string>();
  isCreatedStream$ = this.isCreatedItem.asObservable();

  private currentIpItem = new BehaviorSubject<IIpItem>({} as IIpItem);
  currentIpItemStream$ = this.currentIpItem.asObservable();

  setCurrentIpItem(item: IIpItem) {
    this.currentIpItem.next(item);
  }

  getAll(): Observable<IIpItem[]> {
    return this.http.get<IIpItem[]>(this.ipDataBase)
    .pipe(
      delay(200),
      tap(items => {
        if (items.length > 0) {
          this.ipItems = items.reverse();
          this.lastId = items[0].id;
          this.lastAddedCode = items[0].code;
        }
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

  search(term: string): Observable<IIpItem[]> {
    const url = `${this.ipDataBase}?search=${term}`;
    return this.http.get<IIpItem[]>(url)
    .pipe(
      tap(items => {
        items.length > 0 ? this.ipItems = items.reverse() : this.ipItems = [];
      }),
      catchError(this.errorHandler.bind(this))
    )
  }

  setCreatedItem(code: string) {
    this.isCreatedItem.next(code);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  getAllDistricts(): Observable<string[]> {
    return this.http.get<string[]>(this.districtsUrl)
    .pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
}
