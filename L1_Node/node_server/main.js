"use strict";
const http = require("http");
const httpStatus = require("http-status-codes");

const port = 3000;
const app = http.createServer( (req, res ) =>{
    console.log("Received an incoming request");
    res.writeHead(httpStatus.OK, {"Content-Type" : "text/html"});
    let responseMsg = "<h1>Hello World!</h1>";
    res.write(responseMsg);
    console.log("Sent a response : ${responseMsg}");
});

app.listen(port),
console.log("The server has started and is listening on port number: ${port}");

