import { FolderFormat } from "../task/folder-format.enum";
import { FileMatch } from "../task/file-match.enum";

const fs = require('fs');
const path = require('path');

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

export function getFiles(srcPath: string, recursive: boolean = false): string[] {
  if (!fs.existsSync(srcPath)) {
    return [];
  }
  return getFilesHelper(srcPath, recursive);
}

function getFilesHelper(dirPath: string, recursive: boolean = false, allFiles: string[] = []): string[] {
  const files: string[] = fs.readdirSync(dirPath);
  files.forEach((file: string) => {
    const filePath: string = path.join(dirPath, file);
    const isDir: boolean = fs.statSync(filePath).isDirectory();
    if (recursive && isDir) {
      allFiles = getFilesHelper(filePath, recursive, allFiles);
    } else if (!isDir) {
      allFiles.push(filePath);
    }
  });
  return allFiles;
}

export function getFolderFormat(folderFormat: FolderFormat): string {
  const date: Date = new Date();
  const defaultFormat: string = `${date.getMonth() + 1}-${date.getFullYear()}`;
  if (folderFormat == null) {
    return defaultFormat;
  }
  switch (folderFormat) {
    case FolderFormat.MonthYear: {
      return `${date.getMonth() + 1}-${date.getFullYear()}`;
    }
    case FolderFormat.YearMonth: {
      return `${date.getFullYear()}-${date.getMonth() + 1}`;
    }
    case FolderFormat.DayMonthYear: {
      return defaultFormat;
    }
    default: {
      return defaultFormat;
    }
  }
}

export function matches(text: string, matcherTest: string, fileMatch: FileMatch): boolean {
  if (text == null || matcherTest == null || fileMatch == null) {
    return false;
  }
  switch(fileMatch) {
    case FileMatch.Matches: {
      return text === matcherTest;
    }
    case FileMatch.MatchesCaseInsensitive: {
      return text.toLowerCase() === matcherTest.toLowerCase();
    }
    case FileMatch.NotMatch: {
      return text !== matcherTest;
    }
    case FileMatch.NotMatchCaseInsensitive: {
      return text.toLowerCase() !== matcherTest.toLowerCase();
    }
    case FileMatch.Contains: {
      return text.includes(matcherTest);
    }
    case FileMatch.NotContains: {
      return !text.includes(matcherTest);
    }
    default: {
      return false;
    }
  }
}
