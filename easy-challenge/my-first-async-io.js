//importing the file system module
const fs = require('fs');

//getting file path from the command line arguments
const filePath = process.argv[2];

//creating variable for fileContents
let fileContents;

//using 'readFile' method to read contents of the file asynchronously
//using 'utf8' to interpret the file data as a UTF-8 encoded string
//callback function is executed after the file is read
fs.readFile(filePath, 'utf8', function(err, data) {
    //checking for potential errors in reading the file
    if (err) {
        return console.error(err);
    }

    //process file contents by splitting the data into lines and calculating number of lines
    fileContents = data.split('\n').length - 1;

    //loging output of result to the console
    console.log(fileContents);
});