const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const notesPath = 'notes.json';
const log = console.log;

const getAllNotes = () => {
    try {
        const notesJSON = fs.readFileSync(notesPath, { encoding: "utf-8" });
        return JSON.parse(notesJSON);
    }
    catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    try
    {
        const stringifiedNotes = JSON.stringify(notes);
        fs.writeFileSync(notesPath, stringifiedNotes);
        log(chalk.green('Note added to the list'));
    }
    catch(e)
    {
        log(chalk.red(e.message))
    }
} 

const addNote = (title, body) => {
    const notes = getAllNotes();
    
    if (notes.find( note => note.title === title.trim())) {
        log(chalk.red("Note already added"))
        return;
    }

    notes.push({
        title: title.trim(),
        body: body.trim()
    });

    saveNotes(notes);
}

const getNoteByTitle = (title) => console.table(Array(JSON.parse(notesJSON).find(note => note.title = title)));

const listAll = () => getAllNotes().length > 0? console.table(getAllNotes()) : log(chalk.red("No notes were found, to add a note run app.js and execute 'add' command followed by a title and a body"))

const removeNote = (title) => {
    const notes = getAllNotes();
    if (notes.find(note => note.title === title)) {
        const filteredNotes = notes.filter(note => note.title !== title);
        fs.writeFileSync(notesPath, JSON.stringify(filteredNotes));
        log(chalk.red(`Note titled "${title}" has been removed`));
        return;
    }

    log(chalk.red("Please check if provided Title is well written"))
}

module.exports = { getNoteByTitle, addNote, listAll, removeNote };