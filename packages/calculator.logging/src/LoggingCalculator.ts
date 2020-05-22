import { ICalculator } from '@acme/calculator';

export interface Options {
  instance: ICalculator;
}

export class LoggingCalculator implements ICalculator {
  constructor(private options: Options) {}

  add(value1: number, value2: number) {
    console.log('enter', value1, value2);
    const result = this.options.instance.add(value1, value2);
    console.log('exit', result);
    return result;
  }
}
