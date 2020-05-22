import program from 'commander';
import pkg from '../package.json';
import { action } from './action';

program
  .version(pkg.version)
  .description('Calculator')
  .option('-v1, --value1 [number]', 'value 1')
  .option('-v2, --value2 [number]', 'value 2')
  .action(action)
  .parse(process.argv);
