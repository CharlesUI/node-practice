const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server reacts')
    const url = req.url

    switch (url) {
        case '/':
            res.end('Home')
            break;
        case '/about':
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

server.listen(3000)