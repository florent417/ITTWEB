import http from "http";
import httpStatus from "http-status-codes";

const port = 3000;
const app = http.createServer( (req, res) => {
    console.log("Received an incoming request");
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    
    let resMsg = "<h1>Hello Node, Typescript speaking! test2</h1>";
    res.write(resMsg);
    res.end();
    console.log("Sent a response : ${resMsg}");
});
app.listen(port);
console.log("The server has started and is listening on port number : ${port}");

//20. What is the benefit of programming node with TypeScript?
// I don't have a clear answer, but i can imagine that teh projects may become big, and since typing is supported in typescript
// this means that the structure is overall better and the code is less error prone since you are forced to set it up