const fs = require('fs')

let readStream = fs.createReadStream('test.js')
let writeStream = fs.createWriteStream('test.copy.js')

readStream.on('data', (data) => writeStream.write(data))
readStream.on('end', () => console.log('Done !'))
