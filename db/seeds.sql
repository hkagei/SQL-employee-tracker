use employee_db;

INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Customer Support"),
    ("Finance"),
    ("Engineering"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Salesperson", 100000, 2),
    ("Lead engineer", 300000, 4),
    ("Software engineer", 150000, 4),
    ("Account manager", 200000, 3),
    ("Accountant", 125000, 3),
    ("Legal team lead", 175000, 5),
    ("Lawyer", 350000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
	("Hiro", "Kagei", 3, NULL)