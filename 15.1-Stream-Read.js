const { createReadStream } = require("fs");
const { result } = require("lodash");

const stream = createReadStream("./content/result.txt");

stream.on("data", (result) => {
  console.log(result);
});
