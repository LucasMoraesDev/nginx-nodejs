// app.js
const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    connection.query('INSERT INTO people (name) VALUES ("John")', (error, results, fields) => {
        if (error) throw error;
        console.log('Inserted John into people table');
    });
    res.send('<h1>Full Cycle Rocks!</h1>');
});

app.get('/names', (req, res) => {
    connection.query('SELECT * FROM people', (error, results, fields) => {
        if (error) throw error;
        const names = results.map(result => result.name);
        res.send(`<h1>Full Cycle Rocks!</h1><p>Names: ${names.join(', ')}</p>`);
    });
});

app.listen(3000, () => {
    console.log('Node.js app listening on port 3000');
});
