'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
	//logging to test
	console.log(req.headers);
	//use simpy provide the header propeties 
	res.json({"ipaddress": req.headers['x-forwarded-for'] ,"language": req.headers['accept-language'],"software": req.headers['user-agent']});
	//close communication 
	res.end();
	
	});
	//start listening 
	var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});