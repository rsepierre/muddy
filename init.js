var fs      = require('fs')
  , net     = require('net')
  , yaml    = require('yaml')
  , express = require('express')
  , io      = require('socket.io')

var config = yaml.eval(fs.readFileSync('config/config.yml', 'utf8'))
  , app    = express.createServer()
  , socket = io.listen(app)

var Alias = require('./lib/alias')

app.configure(function() {
  app.use(express.staticProvider(__dirname + '/public'))
})

app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.listen(6660)

socket.on('connection', function(client) {
  var mud   = net.createConnection(config.port, config.host)
    , alias = new Alias(client)
  
  mud.setEncoding('ascii')
  mud.addListener('data', function(data) {
    var data = data
    
    client.send(data)
  })

  client.on('message', function(data) {
    if (data.match(/^;alias add/)) {
      alias.create(data)
    } else if (data.match(/^;alias ls/i)) {
      alias.show()
    } else if (data.match(/^;alias rm /i)) {
      alias.remove(data)
    } else {
      mud.write(alias.format(data))
    }
  })
})
