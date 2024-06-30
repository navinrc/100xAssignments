const fs = require("fs").promises;
const {resolve} = require('path');

const readFromFile = async (path) => {
  console.log('reading file.....', path)
  try {
    const data = await fs.readFile(path, "utf8");
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error; // Propagate the error
  }
};

// const absolutePath = resolve("./test.txt")
// console.log('absolutePath', absolutePath)
// readFromFile(absolutePath);

module.exports = { readFromFile };
