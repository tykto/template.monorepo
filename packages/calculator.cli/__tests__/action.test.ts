import { action } from '../src/action';

describe('action', () => {
  it('invoke', () => {
    action({});
    expect('smoke-test').toEqual('smoke-test');
  });
});
