let http = require('http')
let fs = require('fs')
let formidable = require('formidable')


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
      `)                                 // enctype="multipart/form-data"- Very important
      res.end()
      // or
      //   res.writeHead(200, {'Content-Type': 'text/html'})
      //   res.end(`
      // <form action="/upload" enctype="multipart/form-data">
      //   <input type="text" name="username" />
      //   <input type="password" name="password" />
      //   <input type="file" name="upload" multiple="multiple" />
      //   <input type="submit" value="Upload" />
      // </form>
      // `)
    } else if (req.method === 'POST') {
      let form = new formidable.IncomingForm()

      form.parse(req, (err, fields, files)=> {
        if(err){
          console.log(err)
          return
        }

        // console.log(fields)
        // console.log(files)
        console.log(fields['username'])
        let uploadFile = files['upload']

        fs.rename(uploadFile.path, './' + uploadFile.name, (err)=> {
          if(err){
            console.log(err)
            return
          }

          console.log('Saved !')

          res.write('Thank you !')
          res.end()
        })
      })
    }
  })
  .listen(1234)
