const XLSX = require('xlsx');
const db = require('./connection');
const queries = require('./queries');

const readExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const main = async () => {
  const filePath = './data.xlsx';

  try {
    const data = readExcelFile(filePath);
    const connection = await db();
    await queries.createTable(connection);
    await queries.insertData(connection, data);
    connection.end();
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

main();
