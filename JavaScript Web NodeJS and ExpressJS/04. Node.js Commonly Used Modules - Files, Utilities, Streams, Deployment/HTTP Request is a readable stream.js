let http = require('http')
let query = require('querystring')

http
  .createServer((req, res) => {
    if(req.method === 'GET'){
      res.writeHead(200, {
        'Content-Type': 'text/html' 
      })
      res.write(`
      <form method="POST">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" />
      </form>  
      `)
      res.end()
    } else if (req.method === 'POST') {
      let result = ''

      req.on('data', data => { result += data })
      req.on('end', () => {
        let parsedResult = query.parse(result)
        console.log(parsedResult.username)
        console.log(parsedResult.password)
      })

      res.write('Thank you !')
      res.end()
    }
  })
  .listen(1234)
