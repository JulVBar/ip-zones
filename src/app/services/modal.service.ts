import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);
  modalTooltip$ = new BehaviorSubject<boolean>(false);
  dropdownMenu$ = new BehaviorSubject<boolean>(false);
  editFormModal$ = new BehaviorSubject<boolean>(true);

  open() {
    this.isVisible$.next(true);
  }
  close() {
    this.isVisible$.next(false);
  }

  auto() {
    this.modalTooltip$.next(true);
    setTimeout(()=>{
      this.modalTooltip$.next(false);
    }, 2000)
  }

  openDropdown() {
    this.dropdownMenu$.next(true);
  }
  closeDropdown() {
    this.dropdownMenu$.next(false);
  }
}
