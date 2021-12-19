import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Planet } from 'src/app/core/models/planet.model';

import { StarWarsApiService } from '../../../../core/services/starwarsapi.service';
import { PlanetComponent } from './planet.component';

class MockStarWarsApiService {
  getPlanet(): Observable<Planet> {
    return of();
  }
}

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetComponent],
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
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
