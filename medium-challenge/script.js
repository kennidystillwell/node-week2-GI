//importing the file system module
const fs = require('fs');

//using try and catch to read planets from text file
try {
    //created data variable that holds contents of 'planets.txt' file
    const data = fs.readFileSync('planets.txt', 'utf8');

    //split the data into an array of planets using commas as separators
    const planets = data.split(',').map(planet => planet.trim());

    //using a for loop to iterate over the array of planets
    for (let index = 0; index < planets.length; index++) {
        //logging each planet to the console
        //displays the planet's position in the list and its name
        console.log(`${index + 1}. ${planets[index]}`);
    }
} catch (err) {
    //handles any errors that occur during file reading
    console.error('Error reading the file:', err);
}
