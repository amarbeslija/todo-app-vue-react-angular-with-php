import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsFilter',
  pure: false
})
export class ItemsFilterPipe implements PipeTransform {

  transform(items: any[], filter: boolean): any {
    return items.filter(item => item.completed === filter);
  }

}
