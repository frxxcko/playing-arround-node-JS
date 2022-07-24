const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const notesPath = 'notes.json';
const log = console.log;

const getAll = () => {
    try {
        const notesJSON = fs.readFileSync(notesPath, { encoding: "utf-8" });
        return JSON.parse(notesJSON);
    }
    catch (error) {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = getAll();
    
    if (notes.find( note => note.title === title.trim())) {
        log(chalk.red("Note already added"))
        return;
    }

    const NOTE = {
        title: title.trim(),
        body: body.trim()
    };

    notes.push(NOTE);
    fs.writeFileSync(notesPath, JSON.stringify(notes));
    log(chalk.green('Note added to the list'));
}

const getNoteByTitle = (title) => console.table(Array(JSON.parse(notesJSON).find(note => note.title = title)));

const listAll = () => {
    if (notesJSON) console.table(JSON.parse(notesJSON));
}

const removeNote = (title) => {
    const notes = getAll();
    if (notes.find(note => note.title === title)) {
        const filteredNotes = notes.filter(note => note.title !== title);
        fs.writeFileSync(notesPath, JSON.stringify(filteredNotes));
        log(chalk.red(`Note titled "${title}" has been removed`));
        return;
    }

    log(chalk.red("Please check if provided Title is well written"))
}

module.exports = { getNoteByTitle, addNote, listAll, removeNote };