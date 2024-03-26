-- Create Employee Tracker database
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

-- Use employeeTracker_db
USE employeeTracker_db;

-- Create table department within employeeTracker_db
CREATE TABLE department (
-- Creates numeric column called 'id' which will automatically increment its default value as new rows are created
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
-- Makes a string column called 'name' which cannot contain null to hold the department name
name VARCHAR(30) NOT NULL,
);

-- Create table role within employeeTracker_db
CREATE TABLE role ( 
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT
)

-- Create table employees within employeeTracker_db
CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NOT NULL
)