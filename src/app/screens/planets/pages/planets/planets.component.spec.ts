import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsComponent } from './planets.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Planet } from '../../../../core/models/planet.model';
import { StarWarsApiService } from '../../../../core/services/starwarsapi.service';

class MockStarWarsApiService {
  listPlanets(): Observable<Planet[]> {
    return of();
  }
}

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: StarWarsApiService, useClass: MockStarWarsApiService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
