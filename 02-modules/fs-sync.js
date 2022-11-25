const { writeFileSync, readFileSync } = require("fs");

//writeFileSync('./02-modules/one.txt', 'first text file')

//const read = readFileSync('./02-modules/one.txt', 'utf8')
//console.log(read)

writeFileSync('./02-modules/one.txt',' append text',{flag: 'a'})