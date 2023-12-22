const http = require('http')
const fs = require('fs')

const server = http.createServer()
server.on('request', (req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.write(text)
    
    //Sending chunks of data using streams
    const fileStream = fs.createReadStream('./content/big.txt', { encoding:'utf8' })

    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(4000)