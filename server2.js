const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server reacts')
    const url = req.url

    switch (url) {
        case '/':
            res.end('Home')
            break;
        case '/about':
            //BLOCKING CODE BEFIRE ACCESSING ABOUT PAGE
            //THIS WILL ALSO BLOCK OTHER SITES LOADING WHEN SYNC FUNCTIONS ARE BLOCKING THE SITE
            //ALWAYS TRY TO SET UP THINGS ASYNCHRONOUSLY
            for (let i = 0; i < 500; i++) {
                for (let j = 0; j < 500; j++) {
                    console.log(`${i} ${j}`)    
                }
            }
            res.end('About')
            break;
        default:
            res.end(
                `<h2>404 Cannot Connect</h2>
                 <a href="/">Go Back</a>`
            )
            break;
    }
})

server.listen(5000, (err) => {
    console.log('listening')
})