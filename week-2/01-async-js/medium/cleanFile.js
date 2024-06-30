const { readFromFile } = require("../easy/readFromFile");
const { writeFile } = require("../easy/writeToFile");
const { resolve } = require("path");

const cleanFile = async (path) => {
  const absolutePath = resolve(path);
  console.log("absolutePath", absolutePath);
  let contents = await readFromFile(absolutePath);
  console.log(contents);
  contents = contents.replace(/\s+/g, " ");
  writeFile(absolutePath, contents);
};

cleanFile("./fileToClean.txt");
