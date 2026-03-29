import fs from 'fs';
const data = fs.readFileSync('build-log.txt', 'utf16le');
console.log(data);
