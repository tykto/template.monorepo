import { Calculator } from '@acme/calculator';
import { LoggingCalculator } from '../src/LoggingCalculator';

describe('LoggingCalculator', () => {
  it('Add', () => {
    const instance = new Calculator();
    const calculator = new LoggingCalculator({ instance });
    const result = calculator.add(1, 1);
    expect(result).toEqual(2);
  });
});
