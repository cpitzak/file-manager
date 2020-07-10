const path = require('path');
import * as fromUtils from './utils';

const currentDir: string = path.join(path.resolve('.'), 'src', 'app', 'core', 'model', 'utilities');

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

  it('#getFiles non recur should return certain amount', () => {
    const dir: string = path.join(currentDir, 'test-data', 'get-files');
    const files: string[] = fromUtils.getFiles(dir);
    console.log(files);
    expect(files.length).toBe(2);
  });

  it('#getFiles null should return empty', () => {
    const files: string[] = fromUtils.getFiles(null);
    expect(files.length).toBe(0);
  });

  it('#getFiles empty str should return empty', () => {
    const files: string[] = fromUtils.getFiles('');
    expect(files.length).toBe(0);
  });

  it('#getFiles nowhere should return empty', () => {
    const files: string[] = fromUtils.getFiles('abrakadabra13212');
    expect(files.length).toBe(0);
  });

  it('#getFiles recursive should return 3', () => {
    const dir: string = path.join(currentDir, 'test-data', 'get-files');
    let f: string[] = [];
    const files: string[] = fromUtils.getFiles(dir, true);
    console.log(files);
    expect(files.length).toBe(3);
  });

});
