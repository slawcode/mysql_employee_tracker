// Packages required for this application 
const inquirer = require('inquirer'); // npm import
const mysql = require('mysql2'); // MySQL2 import

// Connect to MySQL database
const connection = mysql.createConnection({
    host:'localhost',
    port: 3301,
    user: 'root', // MySQL username
    password: '', // MySQL password
    database: 'employeeTracker_db' // Mysql database name
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
        // Conditional statements on user choices 
        .then((answer) => {
            console.log('Answer', answer);
            const { choices } = answers;

            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'Add A Department') {
                addADepartment();
            }
            if (choices === 'Add A Role') {
                addARole();
            }
            if (choices === 'Add An Employee') {
                addAnEmployee();
            }
            if (choices === 'Update An Employee Role') {
                updateAnEmployeeRole();
            }
            if (choices === 'Exit') {
                connection.end()
                console.log('You are leaving the Employee Tracker.');
            }
        });
};

// Function created to view all departments
function viewAllDepartments() {

}

// Function created to view all roles
function viewAllRoles() {

}

// Function created to view all employees
function viewAllEmployees() {
    
}

// Function created to add a department
function addADepartment() {

}

// Function created to add a role
function addARole() {

}

// Function created to add an employee
function addAnEmployee() {

}