var http = require('http');
http.createServer(function(req,res)
{
  res.write('Hello world, This is my Node.js server !');
  res.end();
}).listen(10000);

//commands to run
//locate to the folder using command prompt eg: cd node.js
//then node port.js run
