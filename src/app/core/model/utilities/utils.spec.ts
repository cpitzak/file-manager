import * as fromUtils from './utils';

describe('Utils', () => {

  it('#duplicateName should return same name if no duplicates', () => {
    expect(fromUtils.duplicateName('a', [])).toBe('a');
  });

  it('#duplicateName should return same name if no duplicates', () => {
    expect(fromUtils.duplicateName('', [])).toBe('');
  });

  it('#duplicateName should undefined', () => {
    expect(fromUtils.duplicateName(undefined, ['a'])).toBe(undefined);
  });

  it('#duplicateName should undefined', () => {
    expect(fromUtils.duplicateName(null, ['a'])).toBe(null);
  });

  it('#duplicateName should undefined', () => {
    expect(fromUtils.duplicateName(null, undefined)).toBe(null);
  });

  it('#duplicateName should undefined', () => {
    expect(fromUtils.duplicateName(undefined, null)).toBe(undefined);
  });

  it('#duplicateName should append copy', () => {
    expect(fromUtils.duplicateName('a', ['a'])).toBe('a copy');
  });

  it('#duplicateName should append 2 to copy', () => {
    expect(fromUtils.duplicateName('a copy', ['a copy'])).toBe('a copy 2');
  });

  it('#duplicateName should append 2 to copy test2', () => {
    const existing: string[] = ['a', 'a copy'];
    expect(fromUtils.duplicateName('a', existing)).toBe('a copy 2');
  });

  it('#duplicateName should append 2 to copy test3', () => {
    expect(fromUtils.duplicateName('a copy', ['', 'a', 'a copy', 'a copy 3'])).toBe('a copy 2');
  });

  it('#duplicateName should append 3 to copy', () => {
    expect(fromUtils.duplicateName('a copy 2', ['a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 3 to copy test2', () => {
    expect(fromUtils.duplicateName('a', ['a', 'a copy', 'a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 3 to copy test3', () => {
    expect(fromUtils.duplicateName('a', ['', 'a', 'a copy', 'a copy 2'])).toBe('a copy 3');
  });

  it('#duplicateName should append 4 to copy test4', () => {
    expect(fromUtils.duplicateName('a copy 3', ['', 'a', 'a copy', 'a copy 2', 'a copy 3'])).toBe('a copy 4');
  });

  it('#newName should add 2', () => {
    expect(fromUtils.newName('a', ['', 'a'])).toBe('a 2');
  });

  it('#newName should increment last number', () => {
    expect(fromUtils.newName('a', ['', 'a', 'a 2'])).toBe('a 3');
  });

  it('#newName should new add anything', () => {
    expect(fromUtils.newName('a', [''])).toBe('a');
  });

  it('#newName should be unique on second one', () => {
    expect(fromUtils.newName('a 2', ['a 2'])).toBe('a 3');
  });

});
