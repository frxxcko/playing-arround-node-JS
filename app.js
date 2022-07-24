const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs');
const { argv } = require('yargs');

const log = console.log;


yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        log(`Title: ${chalk.green.inverse(argv.title)}\nBody:  ${chalk.green.inverse(argv.body)}`)

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
    command: 'read',
    describe: 'Reads all notes',
    handler: function () {
        log('Reading all notes...')
    }
})


yargs.parse()