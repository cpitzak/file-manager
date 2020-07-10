const fs = require("fs");

export function duplicateName(name: string, existing: string[]): string {
  if (
    name == null ||
    existing == null ||
    name.length === 0 ||
    name.charAt(0) === " " ||
    name.charAt(name.length - 1) === " "
  ) {
    return name;
  }
  let found: boolean = existing.findIndex((n: string) => n === name) !== -1;
  if (found) {
    const COPY: string = "copy";
    while (found) {
      const copyNumMatch = name.match(/copy (\d+)(?!.*\d)/);
      if (copyNumMatch) {
        // copy #
        const lastNumMatch = copyNumMatch[0].match(/(\d+)(?!.*\d)/);
        const lastNum: number = parseInt(lastNumMatch[0], 10);
        name = name.substring(0, name.indexOf(lastNum + "")) + (lastNum + 1);
      } else if (name.endsWith(COPY)) {
        // copy
        name += " 2";
      } else {
        name += " " + COPY;
      }
      found = existing.findIndex((n: string) => n === name) !== -1;
    }
  }
  return name;
}

export function newName(name: string, existing: string[]): string {
  if (
    name == null ||
    existing == null ||
    name.length === 0 ||
    name.charAt(0) === " " ||
    name.charAt(name.length - 1) === " "
  ) {
    return name;
  }
  let found: boolean = existing.findIndex((n: string) => n === name) !== -1;
  if (found) {
    while (found) {
      const numMatch = name.match(/(\d+)(?!.*\d)/);
      if (numMatch) {
        // ends with num
        const lastNumMatch = numMatch[0].match(/(\d+)(?!.*\d)/);
        const lastNum: number = parseInt(lastNumMatch[0], 10);
        name = name.substring(0, name.indexOf(lastNum + "")) + (lastNum + 1);
      } else {
        name += " 2";
      }
      found = existing.findIndex((n: string) => n === name) !== -1;
    }
  }
  return name;
}

export function isLetterOrNumberStr(n: string) {
  if (n == null) {
    return false;
  }
  return n.match(/^[0-9a-zA-Z]+$/) !== null;
}

export function propertyOf<T>(name: keyof T) {
  return name;
}

export function getFiles(path: string): string[] {
  let files: string[] = [];
  if (fs.existsSync(path)) {
    const filenames: { name: string }[] = fs.readdirSync(path, { withFileTypes: true });
    files = filenames.reduce((arr: string[], value: { name: string }) => arr.concat(value.name), []);
  }
  return files;
}
