var express = require('express'); // We import ExpressJS
 
var app = express(); // This is how we initialize an express app
var PORT = process.env.PORT || 3000;     // We set the port that the application will use
 
// When a GET request is made to the root path: '/' reply with Hello World
app.get('/', function(request, response) {
  response.send('Hello World');
});
 
// We set the app to listen on the given PORT
// It will log a message to the console once it is ready
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
var express = require('express');
 
var app = express();
var PORT = process.env.PORT || 3000;
 
app.get('/:timestamp', function(request, response) {
	var timestamp = request.params.timestamp;
	response.json(getTimestampJSON(timestamp));
});
 
app.listen(PORT, function() {
	console.log('Server is listening on port ' + PORT);
});
 
function getTimestampJSON(timestamp) {
	// First, we handle the unix timestamps. Path parameters come in as text
	// rather than numbers, so we'll attempt to parse them.
	var result = {
		unix: null,
		natural: null
	};
 
	var date;
	if (!isNaN(parseInt(timestamp))) {
		// This means that the parsed integer is NOT a
		// NaN (not a number) value, in other words: it's a valid number.
		date = new Date(parseInt(timestamp));
	} else {
		// Timestamp is not a valid number, we'll create a Date object
		// and then check if is valid before we return it
		date = new Date(timestamp);
	}
 
	if (!isNaN(date.getTime())) {
		// Date.getTime() returns the unix timestamp,
		// if it where an invalid date, this would be NaN
		result.unix = date.getTime();
		result.natural = 'We will get here eventually!';
	}
 
	// We return the value, whatever it may be.
	return result;
}