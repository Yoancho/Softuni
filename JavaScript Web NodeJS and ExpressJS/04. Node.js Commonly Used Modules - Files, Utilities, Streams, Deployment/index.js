const http = require('http')
const port = process.env.PORT || 1234


http
.createServer((req, res) => {
    res.write('Hi')
    res.end()
})
.listen(port)