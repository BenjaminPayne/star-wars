import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { environment } from '../../environments/environment';
import { Paged } from './models/paged.model';
import { Person } from './models/people.model';
import { Planet } from './models/planet.model';
import { ApiRoot } from './models/root.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private readonly apiRoot$: Observable<ApiRoot>;

  private readonly rootUrl = environment.baseStarWarsApiUrl

  constructor(private readonly httpClient: HttpClient) {
    this.apiRoot$ = this.httpClient.get<ApiRoot>(this.rootUrl);
  }

  listPlanets(): Observable<Paged<Planet>> {
    return this.apiRoot$.pipe(switchMap(root => this.httpClient.get<Paged<Planet>>(root.planets)));
  }

  listPeople(): Observable<Paged<Person>> {
    return this.apiRoot$.pipe(switchMap(root => this.httpClient.get<Paged<Person>>(root.people)));
  }

  getPlanet(id: string): Observable<Planet> {
    return this.apiRoot$.pipe(switchMap(root => this.httpClient.get<Planet>(`${root.planets}/${id}`)));
  }

  getPerson(id: string): Observable<Person> {
    return this.apiRoot$.pipe(switchMap(root => this.httpClient.get<Person>(`${root.people}/${id}`)));
  }

  follow<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

}
