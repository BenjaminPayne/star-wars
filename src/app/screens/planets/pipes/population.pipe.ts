import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(value: any, digits?: any): string {
    const population = this.decimalPipe.transform(value / 1000000, digits)
    if (population != null) {
      return population;
    }
    return 'Unknown';
  }

}

