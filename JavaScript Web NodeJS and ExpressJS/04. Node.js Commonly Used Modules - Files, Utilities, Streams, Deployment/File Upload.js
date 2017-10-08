let http = require('http')
let query = require('querystring')


http
  .createServer((req, res) => {
    if(req.method === 'GET'){
      res.writeHead(200, {
        'Content-Type': 'text/html' 
      })
      res.write(`
      <form method="POST" enctype="multipart/form-data"> 
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="file" name="upload" />
        <input type="submit" />
      </form>  
      `)
      res.end()
    } else if (req.method === 'POST') {
      let result = ''

      req.on('data', data => { result += data })
      req.on('end', () => {
        console.log(result)
      })

      res.write('Thank you !')
      res.end()
    }
  })
  .listen(1234)
