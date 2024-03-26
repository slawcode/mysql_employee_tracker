// Packages required for this application 
const inquirer = require('inquirer'); // npm import
const mysql = require('mysql2'); // MySQL2 import

// Connect to MySQL database
const connection = mysql.createConnection({
    host:'localhost',
    port: 3301,
    user: 'root', // MySQL username
    password: '', // MySQL password
    database: 'employeeTracker' // Mysql database name
});

connection.connect ((err) => {
    if (err) throw err;
    console.log('Connected to the Employee Tracker database!');
    // Start the application
    prompt();
});

// Prompt function created to prompt user to select from the choices provided
function prompt() {
    inquirer
        .prompt({
            name: 'choices',
            type: 'list',
            message: 'Please select an option from those provided.'
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
                'Exit'
            ],
        })
}

