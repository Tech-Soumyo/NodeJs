//ComonJS, every file is module (by defult) --> it is a library
//Modules = encapsulated code (only Share minimum)

// *********************************************************************
// const secret = 'SUPER SECRET'
// const jhon = 'Jhon'
// const Peter = 'Peter'


// const sayHi = (name)=>{
//     console.log(`Hello there ${name}`)
// }


// sayHi('Susan')
// sayHi(jhon);
// sayHi(Peter);
//*************************************************************************** */

// const names = require('./4-names')
// const sayHi = require("./5-Utils");
// const data = require('./6-alternative-flavour')
// require("./7-mind-granade");
//*************************************** */
// console.log(data)
// console.log(names.jhon)
// console.log(names.Peter);
//*************************************** */

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/result.txt", "utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream('./content/result.txt', 'utf-8');
    fileStream.on('open', ()=>{
      fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
      res.end(err)
    })
  })
  .listen(5000);