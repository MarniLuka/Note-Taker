const notes = require('express').Router();
const fs = require('fs');

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

// POST Route for notes
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to save a note`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        };
          
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
              const parsedNote = JSON.parse(data);
      
              // Adds a new note
              parsedNote.push(newNote);
      
              // Writes updated note back to the file
              fs.writeFile('./db/db.json', JSON.stringify(parsedNote, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated Notes!')
              );
            }
          });

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