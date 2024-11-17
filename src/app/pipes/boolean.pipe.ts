import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe',
  standalone: true
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean, trueText: string = "Used", falseText = "Not Used"): string {
    return value ? trueText:falseText;
  }
}
