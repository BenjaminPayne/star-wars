import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person } from '../../../../core/models/person.model';
import { PersonInfoComponent } from './person-info.component';

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

describe('PersonInfoComponent', () => {
  let component: PersonInfoComponent;
  let fixture: ComponentFixture<PersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoComponent);
    component = fixture.componentInstance;
    component.person = mockPerson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a person object', () => {
    expect(component.person).toBeTruthy();
  });

  it('should display the persons name in the element with the class .name', () => {
    const name = fixture.nativeElement.querySelector('.name');
    expect(name.textContent).toContain(component.person.name);
  });
});
