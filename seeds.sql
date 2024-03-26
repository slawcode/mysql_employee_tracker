USE employeeTracker_db;

INSERT INTO department (id, name) VALUES
(1, 'Management'),
(2, 'Sales'),
(3, 'Administration'),
(4, 'Accounting');

INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Regional Manager', 100000, 1),
(2, 'Receptionist', 40000, 3),
(3, 'Salesman', 90000, 2),
(4, 'Accountant', 80000, 4),
(5, 'Accountant', 80000, 4),
(6, 'Salesman', 90000, 2),
(7, 'Customer Service Representative', 40000, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Michael', 'Scott', '1', 'NULL'),
(2, 'Pam', 'Beesly', '3', '1'),
(3, 'Jim', 'Halpert', '2', '1'),
(4, 'Kevin', 'Malone', '4', '1'),
(5, 'Meredith', 'Palmer', '4', '1'),
(6, 'Dwight', 'Schrute', '2', '1'),
(7, 'Kelly', 'Kapoor', '3', '1');