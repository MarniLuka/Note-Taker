const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');

// GET Route for notes
// localhost:3001/api/notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received to make a note`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(JSON.parse(data));
        }
    })
})

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to save a note`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'Success!',
            body: newNote,
        }

        res.json(response);
    } else {
        res.json('Error in saving note')
    }
})

module.exports = notes