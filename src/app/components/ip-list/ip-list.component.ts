import { Component, OnInit } from '@angular/core';
import { IpZoneService } from 'src/app/services/ip-zone.service';


@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.scss']
})

export class IpListComponent implements OnInit {
  loading = false;
  p: number = 1;
  constructor(public ipZoneService: IpZoneService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.ipZoneService.getAll().subscribe(() => {
      this.loading = false
    })
  }

  updatelist(): void {
    window.location.reload();
  }
}
