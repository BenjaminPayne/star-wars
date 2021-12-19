import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person } from '../../../../core/models/person.model';
import { PersonOverviewComponent } from './person-overview.component';

const mockPerson: Person = {
  name: 'name',
  birth_year: 'birth_year',
  eye_color: 'eye_color',
  gender: 'gender',
  hair_color: 'hair_color',
  height: 'height',
  mass: 'mass',
  skin_color: 'skin_color',
  homeworld: 'homeworld',
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: 'url',
  created: 'created',
  edited: 'edited',
}

describe('PersonOverviewComponent', () => {
  let component: PersonOverviewComponent;
  let fixture: ComponentFixture<PersonOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOverviewComponent);
    component = fixture.componentInstance;
    component.person = mockPerson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
