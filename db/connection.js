const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bangr7arriej523.",
    database: ''
},
console.log('')
);

module.exports = db;

