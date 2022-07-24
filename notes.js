const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const notesPath = 'notes.json';
const log = console.log;
const notesJSON = fs.readFileSync(notesPath, { encoding: "utf-8" });

const getNoteByTitle = (title) => console.table(Array(JSON.parse(notesJSON).find( note => note.title = title)));

const addNote = (title, body) => {
    const notes = notesJSON || [];
    
    const NOTE = {
        title: title,
        body: body
    };

    if(typeof notes === "object" && notes.length === 0)
    {
        notes.push(NOTE);
        fs.writeFileSync(notesPath, JSON.stringify(notes));
        log(chalk.green.inverse('First note added'));
        return;
    }
    else if(typeof notes === 'string' && notes)
    {
        let notesParsed = JSON.parse(notes);
        if(!notesParsed.find( note => note.title === NOTE.title))
        {
            notesParsed.push(NOTE);
            fs.writeFileSync(notesPath, JSON.stringify(notesParsed));
            log(chalk.green.inverse('Note added to the list'));
            return;
        }
        log(chalk.red("Title already added"))
    }
}

const listAll = () => {
    if(notesJSON) console.table(JSON.parse(notesJSON));
}

const removeNote = (title) => {
    if(notesJSON)
    {
        const notesParsed = JSON.parse(notesJSON);
        if(notesParsed.find( note => note.title === title))
        {
            const filteredNotes = notesParsed.filter( note => note.title !== title);
            fs.writeFileSync(notesPath, JSON.stringify(filteredNotes));
            log(chalk.red.inverse(`Note titled "${title}" has been removed`));
            return;
        }
    }

    log(chalk.red("Please check if provided Title exists or it is well written"))
}

module.exports = { getNoteByTitle, addNote, listAll, removeNote };