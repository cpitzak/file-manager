import * as utils from './utils';

describe('Utils', () => {

  it('#duplicateName should not append copy', () => {
    const name: string = 'a';
    expect(utils.duplicateName(name, [])).toBe('a');
  });

});
