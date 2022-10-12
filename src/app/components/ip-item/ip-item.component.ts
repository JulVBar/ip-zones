import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIpItem } from 'src/app/models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-ip-item',
  templateUrl: './ip-item.component.html',
  styleUrls: ['./ip-item.component.scss']
})
export class IpItemComponent implements OnInit, OnDestroy {
  @Input() ipItem: IIpItem;

  public isOpenDropdown = false;
  public isOpenModal = false;

  private prioritySub = new Subscription();
  private signedSub = new Subscription();

  constructor(
    public ipZoneService: IpZoneService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.prioritySub.unsubscribe();
    this.signedSub.unsubscribe();
  }

  deleteItem(id: number) {
    this.ipZoneService.delete(id).subscribe();
    this.isOpenDropdown = false;
  }

  setSigned(item: IIpItem) {
    const newItem = {
      ...item,
      signed: !item.signed
    }
    this.signedSub = this.ipZoneService.put(newItem).subscribe();
    this.isOpenDropdown = false;
  }

  setPriority(item: IIpItem) {
    const newItem = {
      ...item,
      priority: !item.priority
    }
    this.prioritySub = this.ipZoneService.put(newItem).subscribe();
    this.isOpenDropdown = false;
  }

  editItem(item: IIpItem) {
    this.modalService.openModal();
    this.isOpenDropdown = false;
    this.ipZoneService.setCurrentIpItem(item)
  }
}
