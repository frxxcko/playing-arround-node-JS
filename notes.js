const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const notesPath = 'notes.json';

const log = console.log;

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notesJSON = fs.readFileSync('notes.json', { encoding: "utf-8"}) || [];
    
    const NOTE = {
        title: title,
        body: body
    };

    if(typeof notesJSON === "object" && notesJSON.length === 0)
    {
        notesJSON.push(NOTE);
        fs.writeFileSync(notesPath, JSON.stringify(notesJSON));
        log(chalk.green.inverse('First note added.'));
        return;
    }
    else if(typeof notesJSON === 'string' && notesJSON)
    {
        let notesParsed = JSON.parse(notesJSON);
        notesParsed.push(NOTE);
        fs.writeFileSync(notesPath, JSON.stringify(notesParsed));
        log(chalk.green.inverse('Note added to the list.'));
    }
} 

module.exports = { getNotes, addNote };