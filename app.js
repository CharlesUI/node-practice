//module import and export from './data
const {obj, showData} = require('./data')
showData(obj)

//file system
const fs = require('fs')

//Sync read and write
const first = fs.readFileSync('./content/subfolder/first.txt', 'utf8')

fs.writeFileSync('./content/second.txt', 'second hey hey', { flag: 'a' })
console.log(first)

//Async read and write
console.log('starting async read and write')
fs.readFile('./content/firstAsyncc.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
    fs.readFile('./content/secondAsyncc.txt', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
        fs.writeFile('./content/secondAsyncc.txt', 'This is the second async', (err, data) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(data)
            console.log('process is done')
        })
    })
})
console.log('ending async read and write')


// OS Module
// const os = require('os')

// console.log(os.userInfo())
// console.log(os.hostname())
// console.log(os.freemem())
// console.log(os.homedir())

// PATH Module
// const path = require('path')
// console.log('sep:', path.sep)
// console.log(path.join('content', '/subfolder', 'first.txt'))
// console.log(path.resolve(__dirname, '/content', 'subfolder', 'first.txt'))

