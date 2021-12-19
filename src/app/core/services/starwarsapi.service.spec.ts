import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { Paged } from '../models/paged.model';
import { Planet } from '../models/planet.model';
import { ApiRoot } from '../models/root.model';
import { StarWarsApiService } from './starwarsapi.service';


describe('StarWarsApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: StarWarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StarWarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calls the root api when calling listPlanets()', () => {
    const rootResponse: ApiRoot = {
      people: "/people",
      planets: "/planets",
      films: "/films",
      species: "/species",
      vehicles: "/vehicles",
      starships: "/starships"
    }

    const planetsResponse: Paged<Planet> = {
      count: "1",
      next: "",
      previous: "",
      results: [
        {
          name: 'name',
          rotation_period: 'rotation_period',
          orbital_period: 'orbital_period',
          diameter: 'diameter',
          climate: 'climate',
          gravity: 'gravity',
          terrain: 'terrain',
          surface_water: 'surface_water',
          population: 'population',
          residents: ['one', 'two'],
          films: ['three', 'four'],
          created: 'created',
          edited: 'edited',
          url: 'url',
        }
      ]
    }

    service.listPlanets().subscribe(data =>
      expect(data).toEqual(planetsResponse)
    );

    const req = httpTestingController.expectOne(environment.baseStarWarsApiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(rootResponse);
    const planetsRequest = httpTestingController.expectOne('/planets');
    expect(planetsRequest.request.method).toEqual('GET');
    planetsRequest.flush(planetsResponse);
    httpTestingController.verify();
  });

});
