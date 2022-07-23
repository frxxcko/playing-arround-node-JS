import chalk from 'chalk';
import validator from 'validator';

const log = console.log;

const msg = 'Hola mundo'

log(validator.isEmail('pepito@gmail.com'))
log(chalk.green(msg))