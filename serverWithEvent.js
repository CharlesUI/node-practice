const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('server on')
    res.write('sheesh')
    res.end()
})

server.listen(4000)