import { Calculator } from '../src/Calculator';

describe('Calculator', () => {
  it('Add', () => {
    const calculator = new Calculator();
    const result = calculator.add(1, 1);
    expect(result).toEqual(2);
  });
});
