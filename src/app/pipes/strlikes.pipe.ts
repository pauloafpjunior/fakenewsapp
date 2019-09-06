import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({
  name: 'strlikes'
})
export class StrlikesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value && isNumber(value)) {
      if (value < 1000) {
        return value + ' likes';
      } else if (value < 1000000) {
        return (value / 1000) + ' mil likes';
      } else {
        return (value / 10000000) + ' mi likes';
      }
    } 
    return null;
  }

}
