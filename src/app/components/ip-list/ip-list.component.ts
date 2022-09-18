import { Component, OnInit, Input } from '@angular/core';
import { IIpItem } from '../../models/ip-item';

@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.scss']
})

export class IpListComponent implements OnInit {
  @Input() ipItems: IIpItem[];
  @Input() isLoading: boolean;

  p: number = 1;
  constructor() {}

  ngOnInit(): void {}

  updatelist(): void {
    window.location.reload();
  }
}
