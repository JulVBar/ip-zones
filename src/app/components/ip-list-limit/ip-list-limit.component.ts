import { Component, OnInit, Input } from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-ip-list-limit',
  templateUrl: './ip-list-limit.component.html',
  styleUrls: ['./ip-list-limit.component.scss']
})
export class IpListLimitComponent implements OnInit {
  @Input() amount: number;

  constructor(public modalService: ModalService) { }

  openConfirmModal(): void {
    this.modalService.openConfirmModal();
  }

  ngOnInit(): void {
  }

}
