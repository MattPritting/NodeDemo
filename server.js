//Server JS
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");    
   response.write("<h2>Matt Pritting z69n753</h2> \
                   <p>Running node server on port 3034");
   response.end();
}).listen(3034);