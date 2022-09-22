import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);
  modalTooltip$ = new BehaviorSubject<boolean>(false);
  currentModalId: string;
  currentTooltip: string;

  private isCreated = new Subject<string>();
  isCreatedStream$ = this.isCreated.asObservable();

  isCreatedFn(code: string) {
    this.isCreated.next(code);
  }

  open(id: string) {
    this.isVisible$.next(true);
    this.currentModalId = id;
  }
  close() {
    this.isVisible$.next(false);
  }

  auto(id: string) {
    this.modalTooltip$.next(true);
    this.currentTooltip = id;
    setTimeout(()=>{
      this.modalTooltip$.next(false);
      this.currentTooltip = '';
    }, 2000)
  }
}
