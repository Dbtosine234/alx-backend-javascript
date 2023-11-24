const { readDatabase } = require('./utils'); // Assuming the readDatabase function is exported from utils

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('/alx-backend-javascript/0x05-Node_JS_basic/database.csv') // Replace with the actual file path
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        let responseMessage = 'This is the list of our students\n';

        fields.forEach((field) => {
          const numberOfStudents = data[field].length;
          const listOfFirstNames = data[field].join(', ');
          responseMessage += `Number of students in ${field.toUpperCase()}: ${numberOfStudents}. List: ${listOfFirstNames}\n`;
        });

        res.status(200).send(responseMessage);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.query;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('/alx-backend-javascript/0x05-Node_JS_basic/database.csv') // Replace with the actual file path
      .then((data) => {
        const studentsByMajor = data[major];
        const listOfFirstNamesByMajor = studentsByMajor.join(', ');

        res.status(200).send(`List: ${listOfFirstNamesByMajor}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

// Example usage:
// Assuming you have an Express app setup:
// app.get('/allStudents', StudentsController.getAllStudents);
// app.get('/studentsByMajor', StudentsController.getAllStudentsByMajor);
