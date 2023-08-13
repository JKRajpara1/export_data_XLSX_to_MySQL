const mysql = require("mysql2/promise");

async function connection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3307,
        password: '',
        database: 'excel',
      });
    return connection;
}

module.exports = connection;