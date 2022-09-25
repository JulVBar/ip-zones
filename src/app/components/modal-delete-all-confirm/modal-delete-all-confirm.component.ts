import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { IpZoneService } from 'src/app/services/ip-zone.service';

@Component({
  selector: 'app-modal-delete-all-confirm',
  templateUrl: './modal-delete-all-confirm.component.html',
  styleUrls: ['./modal-delete-all-confirm.component.scss']
})
export class ModalDeleteAllConfirmComponent implements OnInit {
  modalId: string = 'delete-all-modal';
  isLoading = false;

  constructor(
    public modalService: ModalService,
    private ipZoneService: IpZoneService
  ) { }

  ngOnInit(): void {
  }

  clearDataBase(): void {
    this.isLoading = true;

    this.ipZoneService.ipItems.forEach((item, i) => {
      if (i < 20) {
        this.ipZoneService.delete(item.id).subscribe(
          () => {
            this.modalService.close();
            this.isLoading = false;
            this.modalService.open('success-modal');
          }
        )
      }
    })
  }
}
