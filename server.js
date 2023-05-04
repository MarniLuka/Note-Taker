// Required packages
const express = require('express');
const path = require('path');
// Access files from routes
const route = require('./routes/index')
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Content coming from the routes folder will be accessed with /api in the URL
app.use('/api', route);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Route for notes
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html')))


app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
); 