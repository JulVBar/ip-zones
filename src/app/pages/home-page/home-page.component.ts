import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../services/modal.service';
import { IpZoneService } from 'src/app/services/ip-zone.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isLoading = false;

  constructor(public modalService: ModalService,
    public ipZoneService: IpZoneService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ipZoneService.getAll().subscribe(() => {
      this.isLoading = false
    })
  }

  updatelist(): void {
    window.location.reload();
  }
  generateList(): void {
    let arr = [];
    for (let i = 0; i < 99; i++) {
      arr.push({
        "id": (i+1).toString(),
        "net": (i + 1) + ".10.10.10/0",
        "gate": (i + 1) + ".9.9.1",
        "code": "pr-0-0-" + (i + 1),
        "zone": "pr",
        "vlan": i + 1,
        "signed": false,
        "date": "2022-09-22T09:03:42.899Z",
        "priority": false
      })
    }
    console.log(JSON.stringify(arr))
  }
}
