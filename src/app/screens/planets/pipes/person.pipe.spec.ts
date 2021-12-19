import { of } from 'rxjs';

import { PersonPipe } from './person.pipe';

function setup() {
  const starWarsSpy =
    jasmine.createSpyObj('StarWarsApiService', ['follow']);
  const stubValue = of({
    name: 'name',
    birth_year: 'birth_year',
    eye_color: 'eye_color',
    gender: 'gender',
    hair_color: 'hair_color',
    height: 'height',
    mass: 'mass',
    skin_color: 'skin_color',
    homeworld: 'homeworld',
    films: 'films',
    species: [],
    starships: [],
    vehicles: [],
    url: 'url',
    created: 'created',
    edited: 'edited',
  });

  starWarsSpy.follow.and.returnValue(stubValue);
  return { stubValue, starWarsSpy };
}

describe('PersonPipe', () => {

  it('create an instance', () => {
    const { stubValue, starWarsSpy } = setup();
    const pipe = new PersonPipe(starWarsSpy);
    expect(pipe).toBeTruthy();
  });

  it('follows a url to get a person object', () => {
    const { stubValue, starWarsSpy } = setup();
    const pipe = new PersonPipe(starWarsSpy);
    const transform = pipe.transform('personUrl');
    expect(transform).toEqual(stubValue);
  })

});
