let http = require('http');

http
.createServer((request, response)=> {
    "use strict";
    response.write('Hi from Node')
    response.end()
})
.listen(1337)

console.log('Node server listening on 1337...')