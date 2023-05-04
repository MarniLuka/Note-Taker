// Routes folder was created to help organize the different JS files so the server.js file isn't oversaturated with different information. 
// There aren't many routes though so idk if this was actually necessary in this cse...

const express = require('express');
const notesRouter = require('./notes');
const app = express();

app.use('/notes', notesRouter);

module.exports = app;