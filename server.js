var http = require('http');
var mNumber = require('./randomNumber');
var money = require('./money');
var module3 = require('./module3');

http.createServer(function (req, res){
  //200 is the type of response code.
  res.writeHead(200);

  // res.write(mNumber() + '\n');
  // res.write(money(mNumber()) + '\n');

  res.write(module3.account());
  res.write(module3.amount() + '\n');



  res.end();

}).listen(5000);
