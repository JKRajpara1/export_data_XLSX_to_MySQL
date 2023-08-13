# export_data_XLSX_to_MySQL

# Excel to Database Import Project

This project demonstrates how to read data from an Excel file and insert it into a MySQL database using Node.js.
It's a simple example that showcases the use of the `xlsx` library for Excel file manipulation and the `mysql2` library for interacting with a MySQL database.

## Installation

1. Clone this repository
2. Install the required dependencies
   $ npm install

## Configuration

1. Configure the database connection
    Open the connection.js file and update the database connection settings (host, user, password, database, etc.) as needed.
2. Provide your Excel data
    Place your Excel file named data.xlsx in the root directory of the project

## Usage

1. Run the application
   $ node app.js

## Project Structure

app.js: Main entry point of the application.
connection.js: Establishes the database connection.
queries.js: Contains functions to create the table and insert data.
data.xlsx: Sample Excel file containing company data.

## Dependencies
xlsx: Library for reading and writing Excel files.
mysql2: MySQL database driver for Node.js.
