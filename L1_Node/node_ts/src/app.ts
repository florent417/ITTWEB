import http from "http";
import fs from "fs";
import path from "path";
import httpStatus from "http-status-codes";
 
const port = process.env.PORT || 3000;
const publicPath = "/public";

const sendErrorRes : any = (res : http.ServerResponse)=> {
    res.writeHead(httpStatus.NOT_FOUND, {"Content-Type" : "text/html"});
    res.write("<h1>File not found!</h1>");
    res.end();
}

const server = http.createServer( (req, res) => {
    let url = req.url || "";
    if(url.indexOf(".html") !== -1){
        res.writeHead(httpStatus.OK, { "Content-Type" : "text/html"});
        console.log(url);
        customReadFile(publicPath + '/views${url}', res);
    }
    else if(url.indexOf(".css") !== -1){
        res.writeHead(httpStatus.OK, { "Content-Type" : "text/css"});
        customReadFile(publicPath + "/css${url}", res);
    }
    else if(url.indexOf(".js") !== -1){
        res.writeHead(httpStatus.OK, { "Content-Type" : "text/javascript"});
        customReadFile(publicPath + "/js${url}", res);
    }
    else if(url.indexOf(".png") !== -1){
        res.writeHead(httpStatus.OK, { "Content-Type" : "image/png"});
        customReadFile(publicPath + "/images${url}", res);
    }
    else{
        sendErrorRes(res);
    }
});

const customReadFile = (path : string, res : http.ServerResponse) => {
    console.log(path);
    if(fs.existsSync(path)){
        fs.readFile(path, (err, data) => {
            if(err){
                console.log(err);
                sendErrorRes(res);
                return;
            }
            res.write(data);
            res.end();
        })
    }
    else
        sendErrorRes(res);
}

server.listen(port);
console.log("Well done, you made a server!");

//What are the benefits and cons?
// - The benefits are that it makes it possible to handle different routes differently, but it is done with an if statement.
// The problem is that the the statement can get quite large, where it might run slow since the activity is not seperated. 
// The concept of asynchronuity goes away since everything is within one block, where the latency can get quite big, it has to wait
// for the statement to be done running. The code is also error prone, meaning it is also hard to find an error if that happens. 
// Testing is nearly impossible as well, because of the SRP not being upheld. 
//Can you think/program a better (more flexible) solution?
// - Yes, if it possible (like in asp.net) to make fucntions that can act accordingly to routes, instead of going through a whole
// sequence. Less error prone, more seperation etc. 


