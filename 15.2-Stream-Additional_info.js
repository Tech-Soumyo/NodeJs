const { createReadStream } = require("fs");

const stream = createReadStream("./content/result.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});
// default 64kb
// last buffer - remainder
// highWaterMark - control size

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
