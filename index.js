// Packages required for this application 
const inquirer = require('inquirer'); // npm import
const mysql = require('mysql2'); // MySQL2 import

// Connect to MySQL database
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root', // MySQL username
    password: '', // MySQL password
    database: 'employeeTracker_db' // Mysql database name
});

connection.connect ((err) => {
    if (err) throw err;
    console.log('Connected to the Employee Tracker database.');
    // Start the application
    prompt();
});

// Prompt function created to prompt user to select from the choices provided
function prompt() {
    inquirer
        .prompt({
            name: 'choices',
            type: 'list',
            message: 'Please select an option from those provided.',
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
            const { choices } = answer;

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
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Viewing all departments');
        console.table(res);
        prompt();
        });
};

// Function created to view all roles
function viewAllRoles() {
    const query = 'SELECT role.id, role.title, department.name FROM role join department ON role.department_id = department.id';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Viewing All Roles');
        console.table(res);
        prompt();
    });
};

// Function created to view all employees
function viewAllEmployees() {
    const query = `SELECT employees.id, employees.first_name AS "first name", employees.last_name 
                    AS "last name", role.title, department.name AS department, role.salary, 
                    concat(manager.first_name, " ", manager.last_name) AS manager
                    FROM employees
                    LEFT JOIN role
                    ON employees.role_id = role.id
                    LEFT JOIN department
                    ON role.department_id = department.id
                    LEFT JOIN employees manager
                    ON manager.id = employees.manager_id`
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Viewing All Employees');
        console.table(res);
        prompt();
    });
};

// Function created to add a department
function addADepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Enter the new department name:'
            },
        ])
        .then((response) => {
            console.log(response.newDepartment);
            connection.query('INSERT INTO department (name) VALUES (?)', 
            [
                response.newDepartment,
            ], 
            function (err) {
                if (err) throw err;
            });
            console.log('Your new department has been added to the database.')
            viewAllDepartments();
            // Restart the application 
            prompt(); 
        });
};

// Function created to add a role
function addARole() {
    const query = 'SELECT id AS value, name AS name FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'role',
                    message: 'Enter the new role name:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary of the new role:',
                }, 
                {
                    type: 'list',
                    name: 'departmentId',
                    message: 'Choose the department:',
                    choices: res
                }
            ]).then(answer => {
                connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?) ", [answer.role, answer.salary, answer.departmentId])
                console.log('The new role was created.');
                prompt();
            })
    })

};

// Function created to add an employee
function addAnEmployee() {
    const query = "SELECT id AS value, title AS name FROM role";
    connection.query(query, (err, res) => {
        if (err) console.log(err);
        const query2 = 'SELECT id as value, concat (first_name, " ", last_name) AS name FROM employees'
        connection.query(query2, (err, managers) => {
            if (err) console.log(err);
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'fName',
                    message: 'Enter the employees first name:'
                },
                {
                    type: 'input',
                    name: 'lName',
                    message: 'Enter the employees last name:',
                }, 
                {
                    type: 'list',
                    name: 'roleId',
                    message: 'Choose the employees role:',
                    choices: res
                },
                {
                    type: 'list',
                    name: 'managerId',
                    message: 'Choose the employees manager:',
                    choices: managers
                }
            ]).then(answers => {
                connection.query('INSERT into employees(first_name,last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.fName, answers.lName, answers.roleId, answers.managerId])
                console.log('Your employee was added.');
                prompt();
            })
        })  
    })
};

// Function created to update an employee role 
function updateAnEmployeeRole() {
    const query = "SELECT * FROM employees"; 
    connection.query(query, (err, res) => {
        if (err) throw err;
        const query2 = 
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'selectEmployee',
                    message: 'Select the employee to update:',
                    choices: viewAllEmployees,
                },
                {
                    type: 'list',
                    name: 'selectNewRole',
                    message: 'Select the employees new role:',
                    choices: viewAllRoles,
                }
            ])
            .then(answer => {
                connection.query("INSERT INTO ")
            })
            ])
    })
}
