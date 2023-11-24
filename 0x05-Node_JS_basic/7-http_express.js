const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = 'database.csv'; // Replace with your database name
  const filePath = path.join(__dirname, '3-read_file_async.js');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      // Here you can process the data from the file or database if needed
      // For now, sending the file content as is
      res.type('text/plain');
      res.send(`This is the list of our students\n\n${data}`);
    }
  });
});

const server = app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
