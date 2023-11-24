const express = require('express');
const AppController = require('./AppController');
const StudentsController = require('./StudentsController');

const app = express();

// Route '/' to AppController
app.get('/', AppController.getHomepage);

// Routes '/students' and '/students/:major' to StudentsController
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Example usage with the app listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
