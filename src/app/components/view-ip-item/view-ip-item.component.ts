import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IIpItem } from 'src/app/models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
import { Location } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-view-ip-item',
  templateUrl: './view-ip-item.component.html',
  styleUrls: ['./view-ip-item.component.scss']
})
export class ViewIpItemComponent implements OnInit, OnDestroy {

  public ipitemId: string | null = null;
  public isLoading = false;
  public destroyed$ = new Subject();
  public ipItem: IIpItem = {} as IIpItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ipZoneService: IpZoneService,
    private location: Location,
    private clipboard: Clipboard,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.activatedRoute.paramMap.subscribe((param) => {
      this.ipitemId = param.get('ipitemId')
    })

    if (this.ipitemId) {
      this.ipZoneService.getIpItemById(this.ipitemId)
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((data) => {
        this.ipItem = data;
        this.isLoading = false;
      })
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null)
    this.destroyed$.complete()
  }

  goBack() {
    this.location.back();
  }
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.modalService.auto();
  }
}
