const events = require('events')

let emitter = new events.EventEmitter()
emitter.on('myCustomEvent', (data) => {
  console.log(data)
})

emitter.emit('myCustomEvent', {
    name: 'Pesho'
})
