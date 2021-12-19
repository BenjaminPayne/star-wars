import { PopulationPipe } from './population.pipe';

function setup() {
  const decimalSpy =
    jasmine.createSpyObj('DecimalPipe', ['transform']);
  const stubValue = "500";

  decimalSpy.transform.and.returnValue(stubValue);
  return { stubValue, decimalSpy };
}

describe('PopulationPipe', () => {
  it('create an instance', () => {
    const { stubValue, decimalSpy } = setup();
    const pipe = new PopulationPipe(decimalSpy);
    expect(pipe).toBeTruthy();
  });

  it('should call the decimal pipe and transform the input', () => {
    const { stubValue, decimalSpy } = setup();
    const pipe = new PopulationPipe(decimalSpy);
    expect(pipe.transform(5000000000)).toEqual(stubValue);
  });
});
