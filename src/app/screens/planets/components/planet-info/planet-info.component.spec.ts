import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planet } from '../../../../core/models/planet.model';
import { PlanetInfoComponent } from './planet-info.component';

const mockPlanet: Planet = {
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

@Pipe({ name: 'population' })
class MockPipe implements PipeTransform {
  transform(value: any): string {
    return '500';
  }
}

describe('PlanetInfoComponent', () => {
  let component: PlanetInfoComponent;
  let fixture: ComponentFixture<PlanetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetInfoComponent, MockPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetInfoComponent);
    component = fixture.componentInstance;
    component.planet = mockPlanet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
