import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAvailable'
})
export class FilterAvailablePipe implements PipeTransform {

  transform(values: any[], filter: boolean): any[] {

    /*let result: any[] = [];

    if (filter) {
      result = values.filter(value => value.available);
    } else {
      result = values;
    } 

    return result;
    */
    return filter ? values.filter(value => value.available) : values;
  }

}
