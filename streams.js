const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 10000, encoding: 'utf8' })
//highWaterMark = control size of the stream buffer
//encoding - utf8
stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err)
})