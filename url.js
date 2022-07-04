const url = require("url");
const http = require("http");
const fs = require("fs");

//create server
//start server
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const {query,pathname}=url.parse(req.url,true);
   //const pathname = req.url;

  if (pathname === "/overview") {
    res.end("the overview product");
  } else if (pathname === "/product") {
    res.end("the product ");
  } else if (pathname === "/api") {
   
    //  "./data/data.json" (we can use dirname for './')
    // fs.readFile(`${__dirname}/data/data.json`, "utf-8", (err, data) => {
    //   const exdata = JSON.parse(data);
    //   console.log(exdata);
    //   res.writeHead(200, { "Content-type": "application/json" });
    //   res.end(data);
    // });
   
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world", //Our own header before our send out
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8001, "127.0.0.1", () => {
  console.log("Server listening");
}); //Create server port
