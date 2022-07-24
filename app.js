const yargs = require('yargs')
const { argv } = require('yargs')
const notes = require('./notes')



yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
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

yargs.parse()