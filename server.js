const { prompt } = require('inquirer');
require('console.table');
const db = require('./db');

initialPrompt();

function initialPrompt() {
    prompt([{
    type: 'list',
    name: 'option',
    message: "What would you like to do?",
    choices: [
        {
            name: "View All Departments",
            value: "VIEW_ALL_DEPARTMENTS"},
        { 
            name: "View All Roles", 
            value: "VIEW_ALL_ROLES"}, 
        {
            name: "View All Employees", 
            value: "VIEW_ALL_EMPLOYEES"},
        {
            name: "Add a Department",
            value: "ADD_A_DEPARTMENT"},
        {
            name: "Add a Role",
            value: "ADD_A_ROLE"},
        {
            name: "Add an Employee",
            value: "ADD_AN_EMPLOYEE"},
        {
            name: "Update an Employee Role",
            value: "UPDATE_AN_EMPLOYEE_ROLE"},
        {
            name: "Exit",
            value: "EXIT"
        }
    ]
    }])
    .then(res => {
        let option = res.option;
        switch(option) {
            case "VIEW_ALL_DEPARTMENTS":
            viewDepartments();
            break;
            case "VIEW_ALL_ROLES":
            viewRoles();
            break;
            case "VIEW_ALL_EMPLOYEES":
            viewEmployees();
            break;
            case "ADD_A_DEPARTMENT":
            addDepartment();
            break;
            case "ADD_A_ROLE":
            addRole();
            break;
            case "ADD_AN_EMPLOYEE":
            addEmployee();
            break;
            case "UPDATE_AN_EMPLOYEE_ROLE":
            updateEmployee();
            break
            
            default:
                quit();

        }
    })
}

function viewDepartments() {
    db.getAllDepartments().then(([rows]) => {
        let departments = rows;
        console.log('\n');
        console.table(departments)
    }).then(() => initialPrompt())
};

function viewRoles() {
    db.getAllRoles().then(([rows]) => {
        let roles = rows;
        console.log('\n');
        console.table(rows)
    }).then(() => initialPrompt())
};

// a function to view the employees 
// it goes to index.js within db and then finds a function called getAllEmployees that has the sql commands needed to actually 
function viewEmployees() {
    db.getAllEmployees().then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees)
    }).then(() => initialPrompt())
};

function addDepartment() {
    prompt([
        {
          name: "name",
          message: "What is the name of the department?"
        }
      ])
        .then(res => {
          let name = res;
          db.createDepartment(name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => initialPrompt())
        })
};

function addRole() {
    prompt([
        {
          name: "name",
          message: "What is the employee's role?"
        }
      ])
        .then(res => {
          let name = res;
          db.createRole(name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => initialPrompt())
        })
    }

function addEmployee() {
    prompt([
        {
          name: "first_name", 
          message: "What is the employee's first name?",
        },
        {
            name: "last_name", 
            message: "What is the employee's last name?",
        },

      ])
        .then(res => {  
            let first_name = res.first_name;
            let last_name = res.last_name;
            db.getAllRoles()
            .then(([rows]) => {
          let roles = rows;
          const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
          }));

          prompt({
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: roleChoices
          })

        })
    });
}

function quit() {
    process.exit();
}

// function initialPrompt() {
//     inquirer.prompt(
//     {
//     type: 'list',
//     name: 'username',
//     message: "What would you like to do?",
//     choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
//     }
//     )
// }

// function viewDepartments() {
//     db.query('SELECT * FROM department', function (error, data) {
//         if (error) throw error;
//         console.table(data)
//     })
//     initialPrompt();
// }

// function viewRoles() {
//     db.query('SELECT role.*, department.dep_name AS dep')
// }

// function viewEmployees() {
//     db.query
// }