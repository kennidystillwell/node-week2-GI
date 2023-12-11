//importing file system module
const fs = require('fs');

//reading contents of file synchronously and stores it in a buffer
const buf = fs.readFileSync(process.argv[2]);

//converts buffer to string
let str = buf.toString();
//splits string into an array of lines using newline character 
//stores result in 'strArray' variable
let strArray = str.split('\n');

//logs number of lines in file to the console
console.log(strArray.length - 1);