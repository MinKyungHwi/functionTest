const http = require('http');
const fs = require('fs').promises;

http.createServer((req, res) => {
    fs.readFile('./index.html').then(data => {
        res.end(data)
    }).catch(err => {
        console.err(err)
        res.writeHead(400);
        res.end(err.message);
    })
}).listen(3000);
