const fs = require("fs");

const writeFile = (path, contents = "hello") => {
  fs.writeFile(path, contents, () => console.log("wrote to file"));
};

//writeFile("./new.txt");

module.exports = { writeFile };
