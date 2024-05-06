const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': 'id=1',
        'Content-Type': 'text/html; charset=utf-8',
    });
    var i = console.log(req.headers.cookie);    // id=1
    console.log(i);
    res.end(`<h1>User ID is ${req.headers.cookie}</h1>`);

}).listen(3000);
