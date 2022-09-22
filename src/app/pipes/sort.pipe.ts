import { Pipe, PipeTransform } from '@angular/core';
import { IIpItem } from '../models/ip-item';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ipItems: IIpItem[], sortingColumn: string, isDesc: boolean): IIpItem[] {
    let sortedItems: IIpItem[] = ipItems;

    if (sortedItems && sortedItems.length > 0 && sortingColumn && sortingColumn.length > 0) {

      sortedItems.sort((a, b) => {
        if (a[sortingColumn].toString() < b[sortingColumn].toString()) {
          return -1
        } else {
          return 1;
        }

      })

      if (isDesc) {
          return sortedItems;
        } else {
          return sortedItems.reverse();
        }
      }

    return sortedItems;
  }
}
