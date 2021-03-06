var http = require('http');
var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()
const exec = require('child_process').exec;

// REDIS
var client = redis.createClient(6379, '54.175.133.60', {})

function print_hello(req, res){
    client.get("flag", function(err,flag){
        res.write('<html>');
        res.write('<body>');
        res.write('CANARY:\n');
        res.write('Hello! This is the web page for milestone 3 demo.</br></br>');
        res.write('<b>This instance shows the canary version.</b></br>');
        if (flag.charAt(0) == '1'){
            res.write('Feature 1 Enabled.</br>');
        }
        if (flag.charAt(1) == '1'){
            res.write('Feature 2 Enabled.</br>');
        }
        if (flag.charAt(2) == '1'){
            res.write('Feature 3 Enabled.</br>');
        }
        if (flag.charAt(3) == '1'){
         res.write('Feature 4 Enabled.</br>');
        }
        if (flag.charAt(4) == '1'){
         res.write('Feature 5 Enabled.</br>');
        }
        res.write('</body>');
        res.write('</html>');
        res.end();
    });
    
}

function handleRequest(req, res){
    print_hello(req, res);
}

var server = http.createServer(handleRequest);
var PORT = process.env.PORT || 3001;
//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

exports.server = server;
