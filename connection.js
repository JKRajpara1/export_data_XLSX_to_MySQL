const mysql = require("mysql2/promise");

async function connection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'Enter Your Password',
        database: 'excel',
      });
    return connection;
}

module.exports = connection;