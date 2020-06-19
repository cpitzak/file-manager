import * as utils from './utils';

describe('Utils', () => {

  it('#duplicateName should return same name if no duplicates', () => {
    expect(utils.duplicateName('a', [])).toBe('a');
  });

  it('#duplicateName should return same name if no duplicates', () => {
    expect(utils.duplicateName('', [])).toBe('');
  });

  it('#duplicateName should undefined', () => {
    expect(utils.duplicateName(undefined, ['a'])).toBe(undefined);
  });

  it('#duplicateName should undefined', () => {
    expect(utils.duplicateName(null, ['a'])).toBe(null);
  });

  it('#duplicateName should undefined', () => {
    expect(utils.duplicateName(null, undefined)).toBe(null);
  });

  it('#duplicateName should undefined', () => {
    expect(utils.duplicateName(undefined, null)).toBe(undefined);
  });

  it('#duplicateName should append copy', () => {
    expect(utils.duplicateName('a', ['a'])).toBe('a copy');
  });

  it('#duplicateName should append 2 to copy', () => {
    expect(utils.duplicateName('a copy', ['a copy'])).toBe('a copy 2');
  });

  it('#duplicateName should append 2 to copy test2', () => {
    const existing: string[] = ['a', 'a copy'];
    expect(utils.duplicateName('a', existing)).toBe('a copy 2');
  });

  it('#duplicateName should append 2 to copy test3', () => {
    expect(utils.duplicateName('a copy', ['', 'a', 'a copy', 'a copy 3'])).toBe('a copy 2');
  });

  it('#duplicateName should append 3 to copy', () => {
    expect(utils.duplicateName('a copy 2', ['a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 3 to copy test2', () => {
    expect(utils.duplicateName('a', ['a', 'a copy', 'a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 3 to copy test3', () => {
    expect(utils.duplicateName('a', ['', 'a', 'a copy', 'a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 4 to copy test4', () => {
    expect(utils.duplicateName('a copy 3', ['', 'a', 'a copy', 'a copy 2', 'a copy 3'])).toBe('a copy 4');
  });

});
