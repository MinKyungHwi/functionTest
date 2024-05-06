const http = require('http');

http.createServer((req, res) => {

    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.end(`<form method="POST">
            ID: <input type="text" name="id" />
            <br />
            Password: <input type="text" name="password" />
            <button>Submit</button>
        </form>`);
        return;
    }

    let buf = [];
    req.on('data', chunk => {
        console.log(chunk);
        buf.push(chunk);
    });

    req.on('end', () => {
        console.log(Buffer.concat(buf).toString());
        res.end('ok');
    });
}).listen(3000);
