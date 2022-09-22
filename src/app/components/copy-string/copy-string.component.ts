import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {ModalService} from '../../services/modal.service';
import { IIpItem } from '../../models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
@Component({
  selector: 'app-copy-string',
  templateUrl: './copy-string.component.html',
  styleUrls: ['./copy-string.component.scss']
})
export class CopyStringComponent implements OnInit {
  isLoading = false;
  lastAddedCode: string;
  tooltipId: string = 'copy-tooltip';

  constructor(
    private clipboard: Clipboard,
    public modalService: ModalService,
    public ipZoneService: IpZoneService)
  {
    modalService.isCreatedStream$.subscribe(
      code => {
        this.lastAddedCode = code;
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.ipZoneService.getAll().subscribe(() => {
      this.isLoading = false;
      this.lastAddedCode = this.ipZoneService.ipItems[0].code;
    })
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.modalService.auto('copy-tooltip');
  }
}
