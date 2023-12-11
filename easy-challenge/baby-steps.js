//create a variable to store sum
let sum = 0;

//create for loop to iterate through command line arguements starting from second index
for (let i = 2; i < process.argv.length; i++) {
    //convert each arguement to a number and add it to the sum
    sum += Number(process.argv[i]);
}

console.log(sum);