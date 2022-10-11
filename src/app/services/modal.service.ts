import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  modalForm$ = new BehaviorSubject<boolean>(false);
  modalSuccess$ = new BehaviorSubject<boolean>(false);
  modalConfirm$ = new BehaviorSubject<boolean>(false);
  modalTooltip$ = new BehaviorSubject<boolean>(false);

  close() {
    this.modalForm$.next(false);
    this.modalSuccess$.next(false);
    this.modalConfirm$.next(false);
  }

  openModal() {
    this.modalForm$.next(true);
    document.body.classList.add('no-scroll');
  }

  openSuccessModal() {
    this.modalSuccess$.next(true);
    document.body.classList.add('no-scroll');
  }

  openConfirmModal() {
    this.modalConfirm$.next(true);
    document.body.classList.add('no-scroll');
  }

  auto() {
    this.modalTooltip$.next(true);
    setTimeout(()=>{
      this.modalTooltip$.next(false);
    }, 2000)
  }
}
