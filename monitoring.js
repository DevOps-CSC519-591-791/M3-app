var monitor = require("os-monitor");
var redis = require("redis")

var client = redis.createClient(6379, '54.234.163.154', {})


// basic usage 
monitor.start(); 
 
// define handler that will always fire every cycle 
monitor.on('monitor', function(event) {
  // console.log('\n')
  // console.log(event.type, ' This event always happens on each monitor cycle!\n');
  // console.log(event)
  console.log('-------------')
  console.log(event);
  console.log(event.type)
  console.log(event.freemem)
  console.log(event.loadavg[0])
  console.log('-------------')
});


var request = require('request');

var url = "http://169.254.169.254/latest/meta-data/public-ipv4";

console.log(url);
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('request url: '+url);
  }
});
   
// // stop monitor 
// monitor.stop();

// // check whether monitor is running or not 
// monitor.isRunning(); // -> true / false 
 
 
// use as readable stream 
monitor.start({stream: true}).pipe(process.stdout);