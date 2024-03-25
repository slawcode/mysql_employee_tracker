// Packages required for this application 
const inquirer = require('inquirer'); // npm import
const mysql = require('mysql2'); // MySQL2 import

// Creating a mysql connection
const connection = mysql.createConnection({
    host:'localhost',
    port: 3301,
    user: 'root', // MySQL username
    password: '', // MySQL password
    database: 'employeeTracker' // Mysql database name
})