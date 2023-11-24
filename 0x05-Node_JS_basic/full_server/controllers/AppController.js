class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

// Example usage:
// Assuming you have an Express app setup:
// app.get('/', AppController.getHomepage);
