const fs = require("fs");
const path = require("path");

export async function move(sourceFilePath: string, destinationDirPath: string) {
  if (
    sourceFilePath == null ||
    destinationDirPath == null ||
    sourceFilePath.trim().length === 0 ||
    destinationDirPath.trim().length === 0
  ) {
    throw new TypeError("source and destination file required");
  }
  if (!fs.existsSync(sourceFilePath)) {
    throw new TypeError("the specified source does not exist");
  }
  // todo catch errors such as not having permission to write to this directory
  if (!fs.existsSync(destinationDirPath)) {
    // recursively create destination directory
    fs.mkdirSync(destinationDirPath, true);
  }
  // todo: if file destination exists then append "2" (use util func)
  /*if (fs.existsSync(destination)) {
      console.log('exists');
  }*/
  const sourceFilename: string = path.basename(sourceFilePath);
  const destFilePath: string = path.join(destinationDirPath, sourceFilename);
  if (fs.existsSync(destFilePath)) {
    throw new TypeError("destination exists");
  }
  try {
    fs.renameSync(sourceFilePath, destFilePath);
  } catch (error) {
    if (error.code === "EXDEV") {
      await fs.copyFile(sourceFilePath, destFilePath);
      await fs.unlink(sourceFilePath);
    } else {
      throw error;
    }
  }
}
