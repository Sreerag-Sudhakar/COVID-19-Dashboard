import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'million'
})
export class MillionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let million = (value/1000000)
    return million.toFixed(2) + 'm' //Math.round((million * 100) / 100 ) + 'm';
  }

}
