import { Component, OnInit, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {ModalService} from '../../services/modal.service';
import { IIpItem } from '../../models/ip-item';
@Component({
  selector: 'app-copy-string',
  templateUrl: './copy-string.component.html',
  styleUrls: ['./copy-string.component.scss']
})
export class CopyStringComponent implements OnInit {
  @Input() ipItems: IIpItem[];
  @Input() isLoading: boolean;

  constructor(
    private clipboard: Clipboard,
    public modalService: ModalService)
  { }

  ngOnInit(): void {
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.modalService.auto();
  }
}
