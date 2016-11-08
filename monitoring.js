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



var exec = require('child_process').exec;
var cmd = 'curl http://169.254.169.254/latest/meta-data/public-ipv4';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log(stdout)
  console.log(stderr)
});


// // stop monitor 
// monitor.stop();

// // check whether monitor is running or not 
// monitor.isRunning(); // -> true / false 
 
 
// use as readable stream 
// monitor.start({stream: true}).pipe(process.stdout);