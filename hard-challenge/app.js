//importing express module
const express = require('express');
//creating instance of express app
const app = express();
//specifying port number for server to listen
const port = 4000;

//loading employee data from json file
const employees = require('./employees.json');


//defining route for getting all employee data
app.get('/employees', (req, res) => {
    //responds with an array of all employees
  res.json(employees);
});


//defining route where you can get a specific employees data by their ID
app.get('/employees/:employeeID', (req, res) => {

//parses the employeeID parameter from the request URL and converts it to an integer
  const employeeID = parseInt(req.params.employeeID);
  //find employee with specified id within the array
  const employee = employees.find(emp => emp.employeeID === employeeID);

  //checks if the employee was found
  if (employee) {
    //responds with details for that specific employee
    res.json(employee);
  } else {
    //if the employee wasn't found responds with a 404 status and error message
    res.status(404).json({ error: 'Employee not found' });
  }
});

//starts the server and listens for incoming request on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});