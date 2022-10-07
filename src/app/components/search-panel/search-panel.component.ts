import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { IIpItem } from 'src/app/models/ip-item';
import { IpZoneService } from 'src/app/services/ip-zone.service';
@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() searchingEvent = new EventEmitter<boolean>();

  searchedValue: string;

  searchedItems$: Observable<IIpItem[]>
  searchTerm$ = new Subject<string>()

  constructor(public ipZoneService: IpZoneService) {}

  ngOnInit(): void {
    this.searchedItems$ = this.searchTerm$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(term => this.ipZoneService.search(term))
      )
      this.searchedItems$.subscribe(() => {
        this.searchingEvent.emit(false);
      })
  }

  setSearchValue(value: string) {
    this.searchingEvent.emit(true);
    this.searchTerm$.next(value)
  }

  // onKeypressEvent(event: any){
  //   this.searchingEvent.emit(true);
  //   this.ipZoneService.search(event.target.value).subscribe(() => {
  //     this.searchingEvent.emit(false);
  //   })
  // }
}
