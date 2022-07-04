const http=require('http');

//create server
//start server
const server=http.createServer((req, res)=>{
    res.end("HELLO FROM SERVER");
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server listening")
})//Create server port