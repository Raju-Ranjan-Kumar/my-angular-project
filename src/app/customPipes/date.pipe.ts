
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})

export class DatePipe implements PipeTransform {
  transform(value: string | Date, format: 'short' | 'medium' | 'long' | 'full' = 'short'): string {
    const date = new Date(value);
    return date.toLocaleDateString('en-US', { dateStyle: format });
  }
}

