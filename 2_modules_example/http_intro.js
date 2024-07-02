const http = require('http');
const port = 3000;

const server = new http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    } else if(req.url==='/data'){
        res.write('Hello World with data');
        res.end();
    } else if(req.url==='/api/data'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }   else {
        res.write('Nothing!');
        res.end();
    }
});

server.on('connection', (socket)=>{
    console.log('Server connected');
});

server.listen(port);
    
console.log(`Listening on port ${port}`);