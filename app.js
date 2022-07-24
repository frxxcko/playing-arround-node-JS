const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const log = console.log;


yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler:  () => log('Listing all notes...')
})

yargs.command({
    command: 'read',
    describe: 'Reads all notes',
    handler:  () => log('Reading all notes...')
})

log(yargs.argv)