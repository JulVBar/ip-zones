import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);
  modalTooltip$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }

  auto() {
    this.modalTooltip$.next(true)
    setTimeout(()=>{
      this.modalTooltip$.next(false)
    }, 2000)
  }
}
