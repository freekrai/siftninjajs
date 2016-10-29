var apikey = '<your-siftninja-apikey>';
var url = '<your-siftninja-url>';

var siftninja = require("./index")(url, apikey);

siftninja( "you are an ok dude" ).then(function(result) {
	var result = result.body;
	var response = result.response;
	var tags = result.tags;
	goodorno( response, tags );
});

function goodorno( response, vulgar ){
	if( response ){
		console.log( "text was ok" );
	}else{
		console.log( "this failed with a score of " + vulgar  );
	}
}
