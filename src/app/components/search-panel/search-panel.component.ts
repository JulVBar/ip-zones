import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IpZoneService } from 'src/app/services/ip-zone.service';
@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() searchingEvent = new EventEmitter<boolean>();
  term: string;

  constructor(public ipZoneService: IpZoneService) { }

  ngOnInit(): void {
  }

  onKeypressEvent(event: any){
    this.searchingEvent.emit(true);
    this.ipZoneService.search(event.target.value).subscribe(() => {
      this.searchingEvent.emit(false);
    })
  }
}
