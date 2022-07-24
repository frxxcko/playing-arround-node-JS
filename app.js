const yargs = require('yargs');
const { argv } = require('yargs');
const validator = require('validator');
const notes = require('./notes');
const { default: chalk } = require('chalk');
const log = console.log;


yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        const titleIsEmpty = validator.isEmpty(argv.title);
        const bodyIsEmpty = validator.isEmpty(argv.body);
        if(titleIsEmpty || bodyIsEmpty)
        {
            log(chalk.red(`Please provide a valid ${titleIsEmpty? 'title' : bodyIsEmpty? 'body' : ""}`));
            return;
        }
        notes.addNote(argv.title, argv.body);
    },
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        notes.listAll();
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note by Title',
    handler: function() {
        if(validator.isEmpty(argv.title))
        {
            log(chalk.red('Please provide a valid Title to remove'));
            return;
        }
        notes.removeNote(argv.title)
    },
    builder: {
        title: {
            describe: "Provide a Title to remove from the list",
            demandOption: true,
            type: "string"
        }
    }
})

yargs.command({
    command: "get",
    describe: "Get Note by it's title",
    handler: function() {
        if(validator.isEmpty(argv.title))
        {
            log(chalk.red('Please provide a valid Title'));
            return;
        }
        notes.getNoteByTitle(argv.title);
    },
    builder: {
        title: {
            describe: "Provide a Title to retrieve it from the list",
            demandOption: true,
            type: "string"
        }
    }
})

yargs.parse()