"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const port = 3000;
const app = http_1.default.createServer((req, res) => {
    console.log("Received an incoming request");
    res.writeHead(http_status_codes_1.default.OK, {
        "Content-Type": "text/html"
    });
    let resMsg = "<h1>Hello Node, Typescript speaking! test2</h1>";
    res.write(resMsg);
    res.end();
    console.log("Sent a response : ${resMsg}");
});
app.listen(port);
console.log("The server has started and is listening on port number : ${port}");
//# sourceMappingURL=app.js.map