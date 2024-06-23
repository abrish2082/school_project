const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // To parse form data

app.use(bodyParser.urlencoded({ extended: true })); // Configure form data parsing

app.post('/api/register', (req, res) => {
  const { name, email, phone, program, graduationYear } = req.body;

  // Implement data validation and sanitization here (optional)

  // Connect to your database (e.g., using a library like Mongoose)
  // ... (database connection and insertion logic)

  res.status(201).json({ message: 'Registration successful!' }); // Or appropriate response message
});

app.listen(3000, () => console.log('Server listening on port 3000'));