import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../../../core/models/person.model';
import { StarWarsApiService } from '../../../core/starwarsapi.service';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  constructor(private readonly starwars: StarWarsApiService) {
  }

  transform(url: string): Observable<Person> {
    return this.starwars.follow<Person>(url);
  }

}
