var Bluebird   = require('bluebird');
var superagent = require('superagent');

module.exports = function (url, apikey) {
	var string = "siftninjajs:" + apikey;
	var buffer = new Buffer(string);
	var token = buffer.toString('base64');

	function make_request(options) {
		var method  = options.method || 'GET';
		var body	= options.body;
		var headers = options.headers || {};

		headers['content-type'] = 'application/json; charset=utf-8';
		headers.authorization = 'Basic ' + token;
		return new Bluebird(function (resolve, reject) {
			function onEnd(err, res) {
				if (err) return reject(err);
				resolve(res);
			}
			if( method.toLowerCase() === 'post' ){
				superagent.post(url).set(headers).send(body).end(onEnd);
			}else{
				superagent.get(url).set(headers).end(onEnd);
			}
		});
	}

	function siftninja( text ){
		return make_request({
			method: 'POST',
			body:{
				text: text
			}
		});
	}

	return siftninja;
};
