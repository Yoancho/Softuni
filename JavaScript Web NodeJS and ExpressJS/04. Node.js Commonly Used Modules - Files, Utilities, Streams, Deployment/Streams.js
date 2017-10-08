
//--------------- Read file


// let fs = require('fs')

// fs.readFile('test.js', 'utf8', (err, data) => {
//   console.log(data)
// })


//--------------- Readable stream from file

let fs = require('fs')
let readStream = fs.createReadStream('test.js')
let result = [] 
let result2 = ''

readStream.on('data', (data) => { 
  result.push(data)
  result2 += data
  // response.write(data) - stream part of file to browser 
 })
 // readStream.on('end', () => response.end()) - end of stream
readStream.on('end', () => console.log(result))
readStream.on('end', () => console.log('------------------------------------------' + '\n' + '\n' + result2))
