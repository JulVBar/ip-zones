import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-create-success',
  templateUrl: './modal-create-success.component.html',
  styleUrls: ['./modal-create-success.component.scss']
})
export class ModalCreateSuccessComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
