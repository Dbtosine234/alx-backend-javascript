const express = require('express');
const routes = require('./full_server/routes/index'); // Replace with correct path to your routes

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

