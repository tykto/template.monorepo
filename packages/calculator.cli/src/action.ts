import { Calculator } from '@acme/Calculator';

export const action = async (options: any) => {
  const value1 = options.value1 ?? 0;
  const value2 = options.value2 ?? 0;
  const calculator = new Calculator();
  const result = calculator.add(value1, value2);
  console.log(result);
};
