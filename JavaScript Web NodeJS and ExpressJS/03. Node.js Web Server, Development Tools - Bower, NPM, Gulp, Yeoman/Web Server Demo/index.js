const http = require('http')
const port = 1234
const url = require('url')
//------------------------
const fs = require('fs')
//-----------------------

http
    .createServer((req, res) => {
    //console.log(req.headers['accept-encoding'])
    //console.log(req.url)
    let path = url.parse(req.url).pathname
    //----------------------------------
    // console.log(path)
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html',
    //         'Set-Cookie': ['type=master', 'language=javascript']
    //     })
    //     res.write('<h1>Hello from NODE !</h1>')
    //     res.write('<h2>Node is cool</h2>')
    //     res.end()
    //-------------------------------------
        if(path === '/'){
            fs.readFile('./index.html', (err, data)=>{
                if(err){
                    console.log(err)
                    return
                }

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.write(data)
                res.end()
            })
        } else if (path === '/favicon.ico'){
            fs.readFile('./favicon.ico', (err, data)=> {
                if(err){
                    console.log(err)
                    return
                }

                res.writeHead(200)
                res.write(data)
                res.end()
            })
        } else {
            fs.readFile('.' + path, (err, data)=>{
               if(err || !path.startsWith('/content')){
                res.writeHead(404)
                res.write('404 Not found - Check your url')
                res.end()
                return
               } 

               let contentType = 'text/plain'

               if(path.endsWith('.css')){
                contentType = 'text/css'
               } else if(path.endsWith('.js')){
                   contentType = 'application/javascript'
               }

               res.writeHead(200, {
                   'Content-Type': contentType
               })
               res.write(data)
               res.end()
            })
           
        }

    })
    .listen(port)

console.log(`Server listening on port ${port}`)