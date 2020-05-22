import { ICalculator } from './ICalculator';

export class Calculator implements ICalculator {
  add(value1: number, value2: number) {
    return value1 + value2;
  }
}
