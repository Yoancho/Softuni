const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('test.js')
let writeStream = fs.createWriteStream('test.gz')

let gzip = zlib.createGzip()

readStream
.pipe(gzip)
.pipe(writeStream) 
