const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject with the error if the file is not accessible
      } else {
        const lines = data.trim().split('\n');
        const fields = lines[0].split(',');
        const students = {};

        for (let i = 0; i < fields.length; i++) {
          students[fields[i]] = [];
        }

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          for (let j = 0; j < values.length; j++) {
            students[fields[j]].push(values[j]);
          }
        }

        resolve(students); // Resolve with the object of arrays of student first names per fields
      }
    });
  });
}

// Example usage:
const filePath = '/alx-backend-javascript/0x05-Node_JS_basic/database.csv'; // Replace with the actual file path
readDatabase(filePath)
  .then((data) => {
    console.log(data); // Output the object of arrays of student first names per fields
  })
  .catch((err) => {
    console.error('Error:', err); // Output any errors encountered during reading the file
  });
