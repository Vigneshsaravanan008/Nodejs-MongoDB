const http=require('http');

//create server
//start server
const server=http.createServer((req, res)=>{
    res.end("HELLO FROM SERVER");
})

server.listen(8000)