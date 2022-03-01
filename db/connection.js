const mysql = require("mysql2");

// create a connection to the sql database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Youfoundme69!",
    database: "election",
  },
  console.log("Connected to the election database")
);

module.exports = db;