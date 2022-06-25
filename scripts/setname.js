const fs = require('fs');

const content = fs.readFileSync('./package.json');
const parsed = JSON.parse(content.toString());
parsed.name = process.argv[2];
fs.writeFileSync('./package.json', JSON.stringify(parsed));