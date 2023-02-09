# 12 SQL: Employee Tracker

## Description
This is a command line application which utilizes Node.js, Inquirer, and MySQL to manage a company's employee database.

I included the following three tables in my schema:

* `department`

  * `id`: `INT PRIMARY KEY`

  * `name`: `VARCHAR(30)` to hold department name

* `role`

  * `id`: `INT PRIMARY KEY`

  * `title`: `VARCHAR(30)` to hold role title

  * `salary`: `DECIMAL` to hold role salary

  * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

  * `id`: `INT PRIMARY KEY`

  * `first_name`: `VARCHAR(30)` to hold employee first name

  * `last_name`: `VARCHAR(30)` to hold employee last name

  * `role_id`: `INT` to hold reference to employee role

  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

## Demonstration

Walkthrough video via [Screencastify](https://drive.google.com/file/d/1tjEwpxZIyWtQq3aHYDgg8xo5RtOMDFlB/view)
