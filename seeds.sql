USE employeeTracker_db;

INSERT INTO department (name) VALUES
('Management'),
('Sales'),
('Administration'),
('Accounting');

INSERT INTO role (title, salary, department_id) VALUES
('Regional Manager', 100000, 1),
('Receptionist', 40000, 3),
('Salesman', 90000, 2),
('Accountant', 80000, 4),
('Accountant', 80000, 4),
('Salesman', 90000, 2),
('Customer Service Representative', 40000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Michael', 'Scott', 1, NULL),
('Pam', 'Beesly', 3, 1),
('Jim', 'Halpert', 2, 1),
('Kevin', 'Malone', 4, 1),
('Meredith', 'Palmer', 4, 1),
('Dwight', 'Schrute', 2, 1);