const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

initialPrompt();

function initialPrompt() {
    inquirer.prompt(
    {
    type: 'input',
    name: 'username',
    message: "What would you like to do?",
    choices: ["MIT", "Apache", "Boost", "None"]
    }
    )
}

function viewDepartment() {
    db.query('SELECT * FROM department', function (error, data) {
        if (error) throw error;
        console.table(data)
    })
    initialPrompt();
}