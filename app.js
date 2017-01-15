console.log("Hey Baby smile");
/*var colors = require('colors/safe');
var prompt = require('prompt');

   prompt.start();

  prompt.get(['username'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
   console.log(colors.red('Hello dear ' + result.username));
  //  console.log(' Hello dear ' + result.username);
     });

  function onErr(err) {
    console.log(err);
    return 1;
  }  */
/*console.log("node_modules\.bin\http-server");
var childProcess = require('child_process');
childProcess.exec('start chrome --kiosk localhost:8080\index.html');*/
const shelljs = require("shelljs");
var opener = require("opener");

shelljs.exec("node_modules\\.bin\\http-server", {async:true});
opener("http://127.0.0.1:8080");


