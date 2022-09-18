import { Component, Input, OnInit } from '@angular/core';
import { IIpItem } from 'src/app/models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-ip-item',
  templateUrl: './ip-item.component.html',
  styleUrls: ['./ip-item.component.scss']
})
export class IpItemComponent implements OnInit {
  @Input() ipItem: IIpItem;

  isOpen = false;
  isOpenModal = false;

  constructor(
    public ipZoneService: IpZoneService,
    public modalService: ModalService
  ) { }

  deleteItem(id: number) {
    this.ipZoneService.delete(id).subscribe();
    this.isOpen = false;
  }

  editItem(item: IIpItem) {
    this.modalService.openEditForm();
    this.isOpen = false;
    this.isOpenModal = true;
  }

  setSigned(item: IIpItem) {
    const newItem = {
      ...item,
      signed: !item.signed
    }
    this.ipZoneService.put(newItem).subscribe();
    this.isOpen = false;
  }

  setPriority(item: IIpItem) {
    const newItem = {
      ...item,
      priority: !item.priority
    }
    this.ipZoneService.put(newItem).subscribe();
    this.isOpen = false;
  }

  ngOnInit(): void {

  }
}
