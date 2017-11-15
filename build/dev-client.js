/* eslint-disable */
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function(event) {
	if (event.action === 'reload') {
		window.location.reload()
		console.log(111111111111111)
	}
});
