import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../../../core/models/people.model';
import { SwapiService } from '../../../core/swapi.service';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  constructor(private readonly starwars: SwapiService) {
  }

  transform(url: string): Observable<Person> {
    return this.starwars.follow<Person>(url);
  }

}
