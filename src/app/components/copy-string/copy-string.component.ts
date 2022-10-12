import { Component, OnDestroy, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {ModalService} from '../../services/modal.service';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-copy-string',
  templateUrl: './copy-string.component.html',
  styleUrls: ['./copy-string.component.scss']
})
export class CopyStringComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public lastAddedCode: string;
  private isCreatedStreamSub = new Subscription();
  private lastAddedCodeSub = new Subscription();

  constructor(
    private clipboard: Clipboard,
    public modalService: ModalService,
    public ipZoneService: IpZoneService)
  {
    this.isCreatedStreamSub = ipZoneService.isCreatedStream$.subscribe(
      code => {
        this.lastAddedCode = code;
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.lastAddedCodeSub = this.ipZoneService.getAll().subscribe(() => {
      this.isLoading = false;
      this.lastAddedCode = this.ipZoneService.ipItems[0].code;
    })
  }

  ngOnDestroy(): void {
    this.isCreatedStreamSub.unsubscribe();
    this.lastAddedCodeSub.unsubscribe();
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.modalService.auto();
  }
}
