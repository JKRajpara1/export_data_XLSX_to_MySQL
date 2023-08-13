const createTable = async (connection) => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS company_data (
        id INT PRIMARY KEY,
        companyName VARCHAR(255) NOT NULL UNIQUE ,
        marketCap VARCHAR(255) NOT NULL 
      );
    `;
  
    try {
      await connection.query(createTableQuery);
      console.log('Table created successfully!!!!!!!!!!!!!!!!!!!!!!!!!!');
    } catch (err) {
      console.log(err.code);
    }
  };
  
  const insertData = async (connection, data) => {
    const insertQuery = `INSERT IGNORE INTO company_data(id , companyName, marketCap) VALUES ?`;
    const values = data.map((row) => Object.values(row));

  
    try {
      await connection.query(insertQuery, [values]);
      console.log('Data inserted successfully!');
    } catch (err) {
        if(err.code === "ER_DUP_ENTRY"){
            console.log("Error due duplicate data entry");
        }
    }
  };

  
  module.exports = {
    createTable,
    insertData,
  };
  