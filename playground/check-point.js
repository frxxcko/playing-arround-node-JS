const fs = require('fs');
const data = require('./check-point.json')

const dataStringified = JSON.stringify({ ...data, name: "Malena", age: 28})

fs.writeFileSync('check-point.json', dataStringified)