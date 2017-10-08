let cluster = require('cluster')
let http = require('http')
let cpus = require('os').cpus().length
let port = 1234
if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork()
    console.log(`core ${i} run...`)
  }
} else {
  http
  .createServer((req, res)=> {
      res.write('Evala Bate')
      res.end()
  })
  .listen(port)
  console.log(`Server listen on ${port}`)
}
