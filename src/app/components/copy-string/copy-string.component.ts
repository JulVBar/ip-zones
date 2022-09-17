import { Component, OnInit } from '@angular/core';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import { Clipboard } from '@angular/cdk/clipboard';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-copy-string',
  templateUrl: './copy-string.component.html',
  styleUrls: ['./copy-string.component.scss']
})
export class CopyStringComponent implements OnInit {


  constructor(
    public ipZoneService: IpZoneService,
    private clipboard: Clipboard,
    public modalService: ModalService)
  { }

    loading = true;

  ngOnInit(): void {
    this.loading = true;
    this.ipZoneService.getAll().subscribe(() => {
      this.loading = false
    })
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.modalService.auto();
  }
}
