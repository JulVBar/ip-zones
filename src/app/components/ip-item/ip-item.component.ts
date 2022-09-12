import { Component, Input } from '@angular/core';
import { IIpItem } from 'src/app/models/ip-item';

@Component({
  selector: 'app-ip-item',
  templateUrl: './ip-item.component.html',
  styleUrls: ['./ip-item.component.scss']
})
export class IpItemComponent {
  @Input() ipItem: IIpItem;

  isOpen = false;
}
