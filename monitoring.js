var monitor = require("os-monitor");
var redis = require("redis")
var http = require("http")
var client = redis.createClient(6379, '54.234.163.154', {})


// basic usage 
monitor.start(); 
 
// define handler that will always fire every cycle 
// monitor.on('monitor', function(event) {
//   // console.log('\n')
//   // console.log(event.type, ' This event always happens on each monitor cycle!\n');
//   // console.log(event)
//   console.log('-------------')
//   console.log(event);
//   console.log(event.type)
//   console.log(event.freemem)
//   console.log(event.loadavg[0])
//   console.log('-------------')
// });


var url = "http://169.254.169.254/latest/meta-data/public-ipv4";

var options = {
  host: "http://169.254.169.254/latest/meta-data/public-ipv4",
  port: 80,
  path: '/',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
   
// // stop monitor 
// monitor.stop();

// // check whether monitor is running or not 
// monitor.isRunning(); // -> true / false 
 
 
// use as readable stream 
// monitor.start({stream: true}).pipe(process.stdout);