import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Planet } from '../../../../core/models/planet.model';
import { StarWarsApiService } from '../../../../core/services/starwarsapi.service';
import { Paged } from '../../../../core/models/paged.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  pagedPlanets$: Observable<Paged<Planet>>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly starwars: StarWarsApiService
  ) {
    this.pagedPlanets$ = this.starwars.listPlanets();
  }

  ngOnInit(): void {
  }

  next(nextUrl: string): void {
    this.pagedPlanets$ = this.starwars.follow<Paged<Planet>>(nextUrl);
  }

  previous(previousUrl: string): void {
    this.pagedPlanets$ = this.starwars.follow<Paged<Planet>>(previousUrl)
  }

  navigateTo(planet: Planet): void {
    const groups = planet.url.split('/').filter(group => group != "");
    const id = groups[groups.length - 1];
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }
}
