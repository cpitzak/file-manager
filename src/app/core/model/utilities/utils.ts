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
  let found: boolean = existing.findIndex((n: string) => n === name) !== -1
  if (found) {
    const COPY: string = 'copy';
    while (found) {
      const copyNumMatch = name.match(/copy (\d+)(?!.*\d)/);
      if (copyNumMatch) { // copy #
        const lastNumMatch = copyNumMatch[0].match(/(\d+)(?!.*\d)/);
        const lastNum: number = parseInt(lastNumMatch[0], 10);
        name = name.substring(0, name.indexOf(lastNum+'')) + (lastNum + 1);
      } else if (name.endsWith(COPY)) { // copy
        name += ' 2';
      } else {
        name += ' ' + COPY;
      }
      found = existing.findIndex((n: string) => n === name) !== -1
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
