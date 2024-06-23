const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Student = require('./models/Student');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student-registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/register', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (err) {
    console.error('Error registering student:', err);
    res.status(500).json({ message: 'Error registering student' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
