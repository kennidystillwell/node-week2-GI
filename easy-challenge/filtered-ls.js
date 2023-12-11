//importing file system module
const fs = require('fs')
//importing path module
const path = require('path');

//getting directory path from command line arguments
const directory = process.argv[2];
//getting file extension from command line arguements; add a '.' to match format of file extensions
const ext = '.' + process.argv[3];

//using 'readdir' method from 'fs' to read contents of directory
fs.readdir(directory, function (err, files) {
    //throws an error if theres a problem reading directory
    if (err) {
        return console.log(err);
    }

    //using 'forEach' method to iterate over the files in the directory
    files.forEach(function(file) {
        //checks to see if the file has specified extension
        if (path.extname(file) === ext) {
            //if it does, the name is printed in the console
            console.log(file);
        };
    });
});