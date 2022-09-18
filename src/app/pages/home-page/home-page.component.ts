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

}
