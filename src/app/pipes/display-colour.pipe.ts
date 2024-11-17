import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayColour',
  standalone: true
})
export class DisplayColourPipe implements PipeTransform {

  transform(value: string): string {
    return value === 'Used' ? 'red' : 'green';
  }

}
