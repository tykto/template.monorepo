# @acme/calculator.logging

A simple calculator with logging.

## Installation

```console
$ yarn add @acme/calculator.logging
```

## Usage

```ts
import { Calculator } from '@acme/calculator';
import { LoggingCalculator } from '@acme/calculator.logging';

const instance = new Calculator();
const calculator = new LoggingCalculator({ instance });
const result = calculator.add(1, 1);
console.log(result); // -> 2
```
