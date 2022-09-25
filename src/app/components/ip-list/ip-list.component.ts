import { Component, OnInit, Input } from '@angular/core';
import { IIpItem } from '../../models/ip-item';
import { ColumnTitle } from 'src/app/models/column-title';
@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.scss']
})

export class IpListComponent implements OnInit {
  @Input() ipItems: IIpItem[];
  @Input() isLoading: boolean;

  columnTitles: ColumnTitle[] = [
    {name: '', sortable: false},
    {name: 'code', sortable: true},
    {name: 'net', sortable: true},
    {name: 'gate', sortable: true},
    {name: 'zone', sortable: true},
    {name: 'vlan', sortable: true},
    {name: 'signed', sortable: true},
    {name: 'date', sortable: true},
    {name: '', sortable: false}
  ];

  sortingColumn: string;
  isDesc: boolean = false;

  p: number = 1;
  constructor() {}

  ngOnInit(): void {}

  sortBy(colName: string) {
    if (colName) {
      this.sortingColumn = colName;
    this.isDesc = !this.isDesc;
    }
  }
}
