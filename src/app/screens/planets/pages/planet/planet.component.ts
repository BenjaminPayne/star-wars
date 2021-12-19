import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';

import { Planet } from '../../../../core/models/planet.model';
import { StarWarsApiService } from '../../../../core/starwarsapi.service';
import { Person } from '../../../../core/models/person.model';

@Component({
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<boolean>();

  detailedPerson$: Subject<Person> = new Subject<Person>();
  planet$: Observable<Planet>;

  constructor(
    private readonly route: ActivatedRoute,
    readonly starwars: StarWarsApiService,
  ) {
    this.planet$ = this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      switchMap(paramMap => {
        const planetId = paramMap.get('id')
        if (planetId != null) {
          return starwars.getPlanet(planetId);
        }
        return of();
      }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  showPersonDetails(person: Person) {
    this.detailedPerson$.next(person);
  }

}
