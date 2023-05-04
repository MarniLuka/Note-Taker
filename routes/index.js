// Routes folder was created to help organize the different JS files so the server.js file isn't oversaturated with different information. 
// There aren't many routes though so idk if this was actually necessary in this case... 

const express = require('express');
const notes = require('./notes');
const app = express();

app.use('/notes', notes);

module.exports = app;