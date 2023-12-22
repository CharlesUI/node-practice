const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`responding to ${name} ${age}`)
})
customEmitter.on('response', (name, age) => {
    console.log(`responding again to ${name}`)
})

customEmitter.emit('response', 'cha', 20)

//Creating a big files for streams
const { writeFileSync } = require('fs')
for(let i = 0; i < 1500; i++) {
    writeFileSync('./content/big.txt', `This is big ${i}\n`, {flag: 'a'})
}