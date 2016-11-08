var monitor = require("os-monitor");
var redis = require("redis")
var publicIp = require('public-ip');

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

var ip = publicIp.v4().then(ip => {
    console.log(ip);
    return ip
    //=> '46.5.21.123' 
});
 
// // stop monitor 
// monitor.stop();

// // check whether monitor is running or not 
// monitor.isRunning(); // -> true / false 
 
 
// use as readable stream 
monitor.start({stream: true}).pipe(process.stdout);