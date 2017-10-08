const fs = require('fs')

let readStream = fs.createReadStream('test.js')
let writeStream = fs.createWriteStream('test_.js')

readStream
.pipe(writeStream)
